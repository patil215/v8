#!/usr/bin/env bash

testFile=$1
lines=`cat $testFile`

echo Building d8...
./tools/dev/gm.py x64.debug

for test in $lines;
do
  echo Running file $test...
  echo Generating compiled file with modified testcases...
  python testmodder/generate.py $test
  echo Running the test...
  test=${test/.js/-typerhappy}
  test=${test#test/}
  echo $test
 ./tools/run-tests.py --outdir=out/x64.debug $test
  echo ""
  echo ""
  echo ""
done
