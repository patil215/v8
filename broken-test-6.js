// Flags: --allow-natives-syntax
// taken from test/mjsunit/regress/string-next-encoding.js
// /home/patil215/proj/v8/out/x64.optdebug/d8 --test /home/patil215/proj/v8/test/mjsunit/mjsunit.js broken-test-6.js --random-seed=34123176 --allow-natives-syntax --nohard-abort --enable-slow-asserts --verify-heap  --trace_turbo

function f() {
  var s = "𐀀"; // STARTS AT 𐀀 (U+10000), or 65536 in decimal. any characters above this fail.
  var i = s[Symbol.iterator]();
  return i.next();
}

for (var i = 0; i < 10000; i++) {
  console.log(f());
}
