// /home/patil215/proj/v8/out/x64.debug/d8 --test /home/patil215/proj/v8/test/mjsunit/mjsunit.js /home/patil215/proj/v8/broken-test-4.js --random-seed=1951091267 --nohard-abort --enable-slow-asserts --verify-heap --allow-natives-syntax --expose-gc --no-always-opt --trace_turbo
// Flags: --gc-global --noincremental-marking --allow-natives-syntax
// based on mjsunit/regress/regress-crbug-350434-typerhappy
  
function crash() {
  var s = "4000111222"; // Outside Smi range.
  var end = s >>> 0;
  s = s.substring(0, end);
}

crash();
%OptimizeFunctionOnNextCall(crash);
crash();
