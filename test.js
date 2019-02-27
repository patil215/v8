function f(x) {
  //Math.checkReturnedType(2.34);
  //console.log(Math.checkReturnedType("boob"));
  console.log(Math.expm1(2.0));
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
