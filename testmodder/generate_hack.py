import click
import os
import errno

SCRIPT_LOC = os.path.dirname(__file__)
SWEET_TEMPLATE_LOC = os.path.join(SCRIPT_LOC, '/sweet/') + "{}.sweet"

MACROS_TO_RUN = [
    ("assert_true", "assertTrue"), 
    ("assert_false", "assertFalse"), 
    ("assert_equals", "assertEquals"), 
    ("assert_equals_delta", "assertEqualsDelta"), 
    ("assert_not_equals", "assertNotEquals"), 
    ("assert_null", "assertNull"), 
    ("assert_not_null", "assertNotNull")
]

LINES_TO_COMMENT = ["assertDoesNotThrow", "assertOptimized", "assertUnoptimized"]

def abs_path(rel_path):
    filename = os.path.join(os.path.dirname(__file__), rel_path)
    return filename

def file_to_lines(filename):
    return open(filename).read().splitlines()

def generate_macro_header():
    modifications = []
    for macro in MACROS_TO_RUN:
        modifications += file_to_lines(abs_path("sweet/" + macro[0] + ".sweet"))
    return modifications

def silentremove(filename):
    try:
        os.remove(filename)
    except OSError as e:
        pass

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

MACRO_HEADER = generate_macro_header()
def macroify(lines):
    # Add macro header
    lines = MACRO_HEADER + lines

    # Write to file
    with open('.tmpmacro', 'w') as sweetfile:
        sweetfile.writelines('\n'.join(lines) + '\n')
    
    # Macroify
    return_code = os.system('sjs .tmpmacro > .tmpmacrocompiled 2>/dev/null')
    macroed = file_to_lines('.tmpmacrocompiled')

    # Cleanup
    silentremove('.tmpmacrocompiled')
    silentremove('.tmpmacro')

    if return_code == 0:
        return macroed
    else:
        return []

@click.command()
@click.argument('filename')
def transform(filename):
    lines = file_to_lines(filename)

    # Delete old file
    silentremove(filename.replace('.js', '-typerhappy.js'))

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

    if not foundFlags:
        lines.insert(comments_or_empty_ind, file_to_lines(abs_path('allow_natives_flag.js'))[0])

    # Comment bad lines
    lines = comment_bad_lines(lines)

    # Remove % signs from intrinsics functions
    lines = modify_natives_syntax(lines, True)

    # Massive hack: we generate a file by going through it line by line and merging individual sweetened components.
    start_index = 0
    new_lines = []
    while start_index < len(lines):
        line = lines[start_index]
        contains_macro = any(macro[1] in line for macro in MACROS_TO_RUN)
        if not contains_macro:
            new_lines.append(line)
            start_index += 1
            continue

        # Take a snippet - pick the end index by looking for a semicolon
        # TODO make better - if there's no semicolon, it'll go through the whole file, which is no bueno.
        end_index = start_index
        while end_index < len(lines):
            if ');' in lines[end_index] or ') ;' in lines[end_index]:
                break
            end_index += 1
        
        # Run the macro on these lines.
        lines_to_macro = lines[start_index : end_index + 1]
        macroed = macroify(lines_to_macro)

        # Add the slice to the end
        new_lines += macroed
        start_index = end_index + 1
    
    lines = new_lines

    # Add % signs back to natives functions
    lines = modify_natives_syntax(lines, False)

    # Output our final modified file
    outfilename = filename.replace('.js', '-typerhappy.js')
    with open(outfilename, 'w') as outfile:
        outfile.writelines('\n'.join(lines) + '\n')

if __name__ == '__main__':
    transform()
