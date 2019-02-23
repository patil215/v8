function f(x) {
  console.log("start");
  console.log(Math.checkReturnedType(2.34));
  console.log("done");
  return 1;
  /*Math.random();
  y = Math.exp(x);
  y += 1;
  z = Math.expm1(x);
  x += y;
  x += z;
  return x;*/
}

var sum = 0;
for (let i = 0; i < 0x100; ++i) {
 sum += f(sum); 
}
