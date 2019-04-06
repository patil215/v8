function main() {
const v4 = [851828232];
const v5 = [v4];
const v6 = {};
const v8 = new BigUint64Array(v5,v6);
function v9(v10,v11,v12,v13) {
}
const v15 = {get:v9};
const v17 = new Proxy(v15,Reflect,1337);
const v18 = {__defineGetter__:ArrayBuffer,resolve:1337,of:v9,...v17,...1337,...Reflect};
}
%NeverOptimizeFunction(main);
main();
