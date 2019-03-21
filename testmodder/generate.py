import click
import os

MACROS_TO_RUN = ["assert_true", "assert_false", "assert_equals", "assert_equals_delta", "assert_not_equals", "assert_null", "assert_not_null"]

SCRIPT_LOC = os.path.dirname(__file__)
SWEET_TEMPLATE_LOC = os.path.join(SCRIPT_LOC, '/sweet/') + "{}.sweet"

NATIVE_FUNCTIONS = {
    0: ["GetUndetectable"],
    1: ["OptimizeFunctionOnNextCall", "DeoptimizeFunction", "NeverOptimizeFunction"]
}


def file_to_lines(filename):
    return open(filename).read().splitlines()


def abs_path(rel_path):
    filename = os.path.join(os.path.dirname(__file__), rel_path)
    return filename


def modify_natives_syntax(lines, forward):
    for i in range(len(lines)):
        for ops in NATIVE_FUNCTIONS:
            for nativefunc in NATIVE_FUNCTIONS[ops]:
                if not forward:
                    lines[i] = lines[i].replace("S" + nativefunc, "%" + nativefunc)
                else:
                    lines[i] = lines[i].replace("%" + nativefunc, nativefunc)
    return lines

@click.command()
@click.argument('filename')
@click.option('--no-cleanup', is_flag=True)
def transform(filename, no_cleanup):
    lines = file_to_lines(filename)

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

    # Prepend our modifications
    modifications = []
    for macro in MACROS_TO_RUN:
        modifications += file_to_lines(abs_path("sweet/" + macro + ".sweet"))

    for ops in NATIVE_FUNCTIONS:
        for nativefunc in NATIVE_FUNCTIONS[ops]:
            tomod = open(abs_path("passthrough_natives_{}.sweet".format(ops))).read().replace("nativefunc", nativefunc).splitlines()
            modifications += tomod

    lines_to_modify = modifications + lines_to_modify

    lines_to_modify = modify_natives_syntax(lines_to_modify, True)

    # Write lines to sweet to file
    with open(filename + '.sweet', 'w') as sweetfile:
        sweetfile.writelines('\n'.join(lines_to_modify) + '\n')

    # Run sweet on the file
    os.system("sjs -p " + filename + '.sweet > ' + filename + '.compiled')

    # Concatenate this file with the lines we saved
    lines = lines_to_save + file_to_lines(filename + '.compiled')

    lines = modify_natives_syntax(lines, False)

    # Output our final modified file
    outfilename = filename.replace('.js', '-typerhappy.js')
    with open(outfilename, 'w') as outfile:
        outfile.writelines('\n'.join(lines) + '\n')

    # Cleanup: remove the side files
    if not no_cleanup:
        os.remove(filename + '.sweet');
        os.remove(filename + '.compiled');

if __name__ == '__main__':
    transform()
