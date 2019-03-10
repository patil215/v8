import click
import os

MACROS_TO_RUN = ["assert_true", "assert_false", "assert_equals", "assert_equals_delta", "assert_not_equals", "assert_null", "assert_not_null"]

def file_to_lines(filename):
    return open(filename).read().splitlines()

@click.command()
@click.argument('filename')
def transform(filename):
    lines = open(filename).read().splitlines()

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
        lines_to_save.append(open('allow_natives_flag.js').read().splitlines()[0])


    lines_to_modify = lines[comments_or_empty_ind:]

    # Prepend our modifications
    modifications = []
    modifications += file_to_lines("helpers.sweet")
    for macro in MACROS_TO_RUN:
        modifications += file_to_lines(macro + ".sweet")

    lines_to_modify = modifications + lines_to_modify

    # Write lines to sweet to file
    with open(filename + '.sweet', 'w') as sweetfile:
        sweetfile.writelines('\n'.join(lines_to_modify) + '\n')

    # Run sweet on the file
    os.system("sjs --out-file " + filename + '.compiled ' + filename + '.sweet')

    # Concatenate this file with the lines we saved
    lines = lines_to_save + file_to_lines(filename + '.compiled')

    # Output our final modified file
    with open(filename, 'w') as outfile:
        outfile.writelines('\n'.join(lines) + '\n')

if __name__ == '__main__':
    transform()
