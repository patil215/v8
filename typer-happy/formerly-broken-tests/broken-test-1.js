// /home/patil215/proj/v8/out/x64.debug/d8 --test /home/patil215/proj/v8/test/mjsunit/mjsunit.js /home/patil215/proj/v8/broken-test-1.js --random-seed=1951091267 --nohard-abort --enable-slow-asserts --verify-heap --allow-natives-syntax --expose-gc --no-always-opt --trace_turbo
// Flags: --allow-natives-syntax --expose-gc --no-always-opt
// based on mjsunit/array-bounds-check-removal-typerhappy 

function bad(a, base) {
    a[base + 1] = 1;
}

var dictionary_map_array = new Int32Array(128);
bad(dictionary_map_array, 0);
%OptimizeFunctionOnNextCall(bad);
bad(dictionary_map_array, 1);
bad(dictionary_map_array, -2);