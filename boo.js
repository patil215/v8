let f = (o) => {
  var obj = [1,2,3];
  var x = Math.ceil(Math.random() << 2);
  //var x = obj.indexOf(Math.floor(Math.random() * 3));
  return obj[o+x];
}

/*for (let i = 0; i < 0x10000; ++i) {
 f(i); 
}*/


f(1);
%OptimizeFunctionOnNextCall(f)
f(2);
f(3);


