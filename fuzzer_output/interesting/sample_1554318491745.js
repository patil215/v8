function main() {
let v1 = Atomics;
const v3 = [13.37,13.37,13.37,13.37];
v3[3658558797] = v1;
function v7(v8,v9,v10,v11) {
}
const v17 = [851828232];
const v18 = [v17];
const v19 = {};
const v21 = new BigUint64Array(v18,v19);
const v23 = new Proxy(v3,Reflect,1337);
const v25 = [851828232];
const v26 = [v25];
const v27 = {};
const v29 = new BigUint64Array(v26,v27);
const v30 = {__defineGetter__:ArrayBuffer,resolve:1337,of:v7,...v23,...1337,...Reflect};
}
%NeverOptimizeFunction(main);
main();
