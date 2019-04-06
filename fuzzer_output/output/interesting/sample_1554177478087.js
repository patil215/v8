function main() {
const v1 = [13.37,13.37];
function v2(v3,v4,v5,v6) {
}
function v7(v8,v9,v10,v11) {
}
const v15 = {preventExtension:v7,get:v2,deleteProperty:v7,has:v7,defineProperty:v7,getOwnPropertyDescriptor:v2,call:v2,set:v7,ownKeys:v7,setPrototypeOf:v2,construct:v7};
const v17 = new Proxy(v1,v15);
const v19 = {length:v7};
const v21 = Reflect.getPrototypeOf(v17,1337,v19);
function v22(v23,v24,v25,v26) {
    'use strict'
    const v27 = [v23];
    const v28 = [v27];
    const v29 = {};
    const v31 = new BigUint64Array(v28,v29);
}
}
%NeverOptimizeFunction(main);
main();
