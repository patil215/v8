import click
import os
import errno

MACROS_TO_RUN = ["assert_true", "assert_false", "assert_equals", "assert_equals_delta", "assert_not_equals", "assert_null", "assert_not_null"]

LINES_TO_COMMENT = ["assertDoesNotThrow"]

SCRIPT_LOC = os.path.dirname(__file__)
SWEET_TEMPLATE_LOC = os.path.join(SCRIPT_LOC, '/sweet/') + "{}.sweet"

def file_to_lines(filename):
    return open(filename).read().splitlines()

def silentremove(filename):
    try:
        os.remove(filename)
    except OSError as e: # this would be "except OSError, e:" before Python 2.6
        if e.errno != errno.ENOENT: # errno.ENOENT = no such file or directory
            raise # re-raise exception if a different error occurred

def abs_path(rel_path):
    filename = os.path.join(os.path.dirname(__file__), rel_path)
    return filename

def comment_bad_lines(lines):
    for i in range(len(lines)):
        for bad in LINES_TO_COMMENT:
            if bad in lines[i]:
                lines[i] = "//" + lines[i]
    return lines

NATIVE_FUNCTIONS = [a.strip() for a in open(abs_path('intrinsics.txt')).readlines()]
def modify_natives_syntax(lines, forward):
    for i in range(len(lines)):
        for nativefunc in NATIVE_FUNCTIONS:
            if forward:
                lines[i] = lines[i].replace("%" + nativefunc, "TESTMODDER" + nativefunc)
            else:
                lines[i] = lines[i].replace("TESTMODDER" + nativefunc, "%" + nativefunc)
    return lines

def comment_assert_optimized(lines):
    for i in range(len(lines)):
        if "assertOptimized" in lines[i] or "assertUnoptimized" in lines[i]:
            lines[i] = '// ' + lines[i]
    return lines

def replace_let_var_for_loop(lines):
    for i in range(len(lines)):
        lines[i] = lines[i].replace("for (let ", "for (var ")
        lines[i] = lines[i].replace("for(let ", "for(var ")
    return lines

@click.command()
@click.argument('filename')
@click.option('--cleanup', is_flag=True, default=False)
def transform(filename, cleanup):
    lines = file_to_lines(filename)

    # Delete old files
    silentremove(filename.replace('.js', '-typerhappy.js'))
    silentremove(filename + '.sweet')
    silentremove(filename + '.compiled')

    # Find the leading comments, and add the '--allow-natives-syntax' flag
    comments_or_empty_ind = 0
    foundFlags = False
    while comments_or_empty_ind < len(lines):
        line = lines[comments_or_empty_ind]

        if not (line.startswith('//') or line.strip() == ''):
            break

        if line.startswith('// Flags:'):
            foundFlags = True
            if 'allow-natives-syntax' not in line:
                line += ' --allow-natives-syntax'
                lines[comments_or_empty_ind] = line

        comments_or_empty_ind += 1

    # Back up the leading comments, because they get stripped by sweet.js
    lines_to_save = lines[:comments_or_empty_ind]
    if not foundFlags:
        lines_to_save.append(file_to_lines(abs_path('allow_natives_flag.js'))[0])

    lines_to_modify = lines[comments_or_empty_ind:]
    lines_to_modify = modify_natives_syntax(lines_to_modify, True)
    lines_to_modify = replace_let_var_for_loop(lines_to_modify)

    # Run ES6 macros by running sweet.js once
    with open(filename + '.sweet', 'w') as sweetfile:
        sweetfile.writelines('\n'.join(lines_to_modify) + '\n')
    # -m - enables ES6 macros (https://github.com/jlongster/es6-macros)            
    os.system("sjs -r -m es6-macros " + filename + '.sweet > ' + filename + '.tmpcompiled')
    lines_to_modify = file_to_lines(filename + '.sweet')
    silentremove(filename + '.tmpcompiled')
    silentremove(filename + '.sweet')

# Prepend our modifications
    modifications = []
    for macro in MACROS_TO_RUN:
        modifications += file_to_lines(abs_path("sweet/" + macro + ".sweet"))

    lines_to_modify = modifications + lines_to_modify

    # Write lines to sweet to file
    with open(filename + '.sweet', 'w') as sweetfile:
        sweetfile.writelines('\n'.join(lines_to_modify) + '\n')

    """ Run sweet on the file. We do it twice - once for es6 macros, and once for our processing.
    Options enabled:
    -r - removes a lot of the hygenic renames
    -p - don't parse what was generated
    """
    os.system("sjs " + filename + '.sweet > ' + filename + '.compiled') # Use macros for es6

    # Concatenate this file with the lines we saved
    lines = lines_to_save + file_to_lines(filename + '.compiled')

    lines = modify_natives_syntax(lines, False)
    lines = comment_assert_optimized(lines)
    lines = comment_bad_lines(lines)

    # Output our final modified file
    outfilename = filename.replace('.js', '-typerhappy.js')
    with open(outfilename, 'w') as outfile:
        outfile.writelines('\n'.join(lines) + '\n')

    # Cleanup: remove the side files
    if cleanup:
        os.remove(filename + '.sweet')
        os.remove(filename + '.compiled')

if __name__ == '__main__':
    transform()
