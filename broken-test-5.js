// /home/patil215/proj/v8/out/x64.debug/d8 --test /home/patil215/proj/v8/test/mjsunit/mjsunit.js /home/patil215/proj/v8/broken-test-5.js --random-seed=1951091267 --nohard-abort --enable-slow-asserts --verify-heap --allow-natives-syntax --expose-gc --no-always-opt --trace_turbo
// Flags: --allow-natives-syntax
// based on mjsunit/dehoisted-array-index-typerhappy

var a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Sign extension of key makes AssertZeroExtended fail in DoBoundsCheck
function ioo(i) {
  return a[i] + a[i + 1];
}

ioo(1);
ioo(1);
%OptimizeFunctionOnNextCall(ioo);
ioo(-1);
