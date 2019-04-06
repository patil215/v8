function main() {
const v1 = [1337,1337,1337,1337,1337];
const v5 = [];
const v6 = {replace:"undefined",race:1337,trimEnd:1337,stackTraceLimit:1337,getUint16:v5,acosh:v5};
const v7 = v1 != BigInt64Array;
const v9 = [13.37,13.37];
function v10(v11,v12,v13,v14) {
}
function v15(v16,v17,v18,v19) {
    const v24 = [-268435456];
    const v25 = [v24];
    v18.prototype = v16;
    const v26 = {};
    const v28 = new BigInt64Array(v25,v26);
}
const v29 = {preventExtension:v15,get:v10,deleteProperty:v15,has:v15,defineProperty:v15,getOwnPropertyDescriptor:v10,call:v10,set:v15,ownKeys:v15,setPrototypeOf:v10,construct:v15};
const v31 = new Proxy(v9,v29);
const v32 = "undefined"[v6];
const v33 = v15(v31,v10,v15,v10,v32);
}
%NeverOptimizeFunction(main);
main();
