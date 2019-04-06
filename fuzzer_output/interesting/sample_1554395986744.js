function main() {
const v2 = [13.37,13.37,13.37,13.37];
function v6(v7,v8,v9,v10) {
}
const v14 = {get:v6,set:v6};
const v16 = Object.defineProperty(v2,1337,v14);
const v17 = new Proxy(v2,Object,1337);
const v18 = {__defineGetter__:ArrayBuffer,resolve:1337,of:v6,...v17,...1337,...Object};
}
%NeverOptimizeFunction(main);
main();
