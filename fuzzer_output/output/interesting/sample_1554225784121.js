function main() {
let v2 = 0;
const v3 = v2 + 1;
v2 = v3;
let v6 = "boolean";
const v9 = new BigUint64Array(1337,BigUint64Array,v6,v6,0);
const v11 = [13.37,13.37,13.37,13.37];
const v13 = [1337,1337];
const v14 = [];
const v15 = [v14];
const v16 = [v15];
const v17 = {};
const v19 = new WeakMap(v16,v17);
const v20 = {a:v11,find:v13,expm1:1337};
function v21(v22,v23,v24,v25) {
    const v27 = [1337,1337,v24,1337];
    const v28 = v25(v22,v17,v20,v27,v14);
}
gc.toString = gc;
const v31 = [13.37,13.37];
function v32(v33,v34,v35,v36) {
}
function v37(v38,v39,v40,v41) {
    v40[gc] = v40;
}
const v42 = {preventExtension:v37,get:v32,deleteProperty:v37,has:v37,defineProperty:v37,getOwnPropertyDescriptor:v32,call:v32,set:v37,ownKeys:v37,setPrototypeOf:v32,construct:v37};
const v44 = new Proxy(v31,v42);
const v46 = {NaN:v37};
const v48 = Reflect.defineProperty(v44,1337,v46);
}
%NeverOptimizeFunction(main);
main();
