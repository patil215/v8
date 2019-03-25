import os
import click

@click.command()
@click.option("--source-file", default="sources.txt")
@click.option("--out-file", default="typer-happy-tests.txt")
@click.option("--tests-dir", default="test/mjsunit")
def generate(source_file, out_file, tests_dir):
    sources = open(source_file).readlines()
    open(out_file, 'w').close()

    for line in sources:
        source = line[:line.find('\"')]
        if len(source) > 2:
            print(source)
            command = "grep -r -l {} {} | grep -v 'sqlite' | grep -v 'typerhappy' | grep -v 'sweet' >> {}".format(source, tests_dir, out_file)
            print(command)
            os.system(command)

if __name__ == '__main__':
    generate()
