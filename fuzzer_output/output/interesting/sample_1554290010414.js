function main() {
const v4 = [13.37,13.37,13.37,13.37];
function v8(v9,v10,v11,v12) {
}
const v16 = {get:v8,set:v8};
const v18 = Object.preventExtensions(v4,"asin",v16);
const v19 = new Proxy(v4,Reflect,1337);
const v20 = {__defineGetter__:ArrayBuffer,resolve:1337,of:v8,...v19,...1337,...Reflect};
}
%NeverOptimizeFunction(main);
main();
