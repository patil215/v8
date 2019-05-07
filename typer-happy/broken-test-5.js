// Based on test/mjsunit/compiler/turbo-number-feedback.js
// Flags: --allow-natives-syntax

function f3(a, b) {
  var x = 0;
  if (a) {
    x = 0.5;
  }
  return x + b;
}

for (var i = 0; i < 1000; i++) {
  assertEquals(1, f3(0, 1));
  assertEquals(1.5, f3(1, 1));
}
/*assertEquals(1, f3(0, 1));
assertEquals(1, f3(0, 1));
%OptimizeFunctionOnNextCall(f3);*/