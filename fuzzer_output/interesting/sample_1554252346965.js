function main() {
const v1 = [13.37,13.37,13.37,13.37];
function v5(v6,v7,v8,v9) {
}
const v13 = {get:v5,set:v5};
const v15 = Object.defineProperty(v1,"asin",v13);
const v16 = new Proxy(v1,Reflect,1337);
const v17 = {__defineGetter__:ArrayBuffer,resolve:1337,of:v5,...v16,...1337,...Reflect};
}
%NeverOptimizeFunction(main);
main();
