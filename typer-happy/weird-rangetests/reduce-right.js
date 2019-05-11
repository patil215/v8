// Based on test/mjsunit/array-reduce.js

function f(a) {
  a.reduceRight((x) => { return x + 1 });
}
f([1,2,]);
f([1,2,]);
%OptimizeFunctionOnNextCall(f);
assertThrows(() => f([]), TypeError);
