// Run: /home/patil215/proj/v8/out/x64.debug/d8 --test /home/patil215/proj/v8/test/mjsunit/mjsunit.js /home/patil215/proj/v8/broken-test-2.js --random-seed=1951091267 --nohard-abort --enable-slow-asserts --verify-heap --allow-natives-syntax --expose-gc --no-always-opt --trace_turbo
// Based on mjsunit/optimized-reduceright-typerhappy

var alwaysThrows = function() {
    var b = [,,,];
    var callback = function(r,v) {
        return r + v;
    };
    b.reduceRight(callback);
}

try { alwaysThrows(); } catch (e) {}
%OptimizeFunctionOnNextCall(alwaysThrows);
try { alwaysThrows(); } catch (e) {}