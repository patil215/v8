function main() {
let v1 = Atomics;
const v3 = [13.37,13.37,13.37,13.37];
v3[-2012821611] = v1;
function v7(v8,v9,v10,v11) {
}
const v18 = {get:v7,set:v7};
const v20 = Object.defineProperty(v3,"asin",v18);
const v21 = new Proxy(v3,Reflect,1337);
const v22 = {__defineGetter__:ArrayBuffer,resolve:1337,of:v7,...v21,...1337,...Reflect};
}
%NeverOptimizeFunction(main);
main();
