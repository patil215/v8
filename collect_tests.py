import os
import click
import re
import subprocess

banned_test_terms = [
        "sqlite",
        "typerhappy",
        "sweet",
        "poppler",
        "status",
        "testcfg",
        "license",
        "LICENSE",
        "tickprocessor",
        ".py"

]

@click.command()
@click.option("--source-file", default="sources.txt")
@click.option("--out-file", default="typer-happy-tests.txt")
@click.option("--tests-dir", default="test/mjsunit")
def generate(source_file, out_file, tests_dir):
    sources = open(source_file).readlines()

    matching = set()
    for line in sources:
        source = line[:line.find('\"')]
        if len(source) > 2:
            command = subprocess.Popen("grep -r -l {} {}".format(source, tests_dir), shell=True, stdout=subprocess.PIPE, stderr=subprocess.STDOUT)
            matching.update([a.strip() for a in command.stdout.readlines()])
            print "SOURCE:" + source
            print matching

    new_matching = []
    for i in matching:
        not_banned = True
        for banned in banned_test_terms:
            if banned in i:
                not_banned = False
                break
        if not_banned:
            new_matching.append(i)
    matching = new_matching
    matching = sorted(matching)

    out = open(out_file, 'w')
    for line in matching:
        out.write(line + '\n')

    out.close()

if __name__ == '__main__':
    generate()
