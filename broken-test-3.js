// /home/patil215/proj/v8/out/x64.debug/d8 --test /home/patil215/proj/v8/test/mjsunit/mjsunit.js /home/patil215/proj/v8/broken-test-3.js --random-seed=1951091267 --nohard-abort --enable-slow-asserts --verify-heap --allow-natives-syntax --expose-gc --no-always-opt --trace_turbo
// Flags: --allow-natives-syntax --opt --no-always-opt
// based on mjsunit/compiler/dataview-get-typerhappy

var buffer = new ArrayBuffer(64);
var dataview = new DataView(buffer, 8, 24);

function readInt8Handled(offset) {
  try {
    return dataview.getInt8(offset);
  } catch (e) {
    return e;
  }
}

function warmup(f) {
  f(0);
  f(1);
  %OptimizeFunctionOnNextCall(f);
  f(2);
  f(3);
}

warmup(readInt8Handled);
assertInstanceof(readInt8Handled(-1), RangeError);