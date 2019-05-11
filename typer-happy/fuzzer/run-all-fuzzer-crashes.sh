echo "Start of test" > fuzzer_results_filtered.out
for file in fuzzer_output/actually_crashes/*
do
  echo "Running $file" >> fuzzer_results_filtered.out
  ./out/x64.debug/d8 "$file" --allow_natives_syntax >>fuzzer_results_filtered.out 2>&1
done
