// /home/patil215/proj/v8/out/x64.debug/d8 --test /home/patil215/proj/v8/test/mjsunit/mjsunit.js /home/patil215/proj/v8/broken-test-4.js --random-seed=1951091267 --nohard-abort --enable-slow-asserts --verify-heap --allow-natives-syntax --expose-gc --no-always-opt --trace_turbo
// Flags: --gc-global --noincremental-marking --allow-natives-syntax
// based on mjsunit/regress/regress-crbug-350434-typerhappy
// breaks even when range assertions are last 
  
function crash() {
  var s = "4000111222"; // Outside Smi range.
  var end = s >>> 0; // Has to be >>>
  console.log(end);
  s.substring(0, end); // Has to be substring
  var p = end + 1;
  return p;

  /*let aux = {z: end, y: 4000111222};
  var is = Object.is(aux.z, aux.y);

  let i = is + 0;
  i &= 1;
  i *= 6;

  let arr = [1.1, 1.2, 1.3, 1.4];

  console.log(i);

  return arr[i];*/
}

crash();
%OptimizeFunctionOnNextCall(crash);
let result = crash();
console.log(result);
