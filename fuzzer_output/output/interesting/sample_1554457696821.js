function main() {
const v2 = [];
const v3 = {keyFor:"undefined",race:1337,trimEnd:1337,stackTraceLimit:1337,ignoreCase:v2,acosh:v2};
const v5 = [13.37,13.37];
function v6(v7,v8,v9,v10) {
}
function v11(v12,v13,v14,v15) {
    const v17 = [13.37];
    v17.length = 65536;
    const v20 = new Int32Array(v17);
}
const v21 = {preventExtension:v11,get:v6,deleteProperty:v11,has:v11,defineProperty:v11,getOwnPropertyDescriptor:v6,call:v6,set:v11,ownKeys:v11,setPrototypeOf:v6,construct:v11};
const v23 = new Proxy(v5,v21);
const v24 = "undefined"[v3];
const v25 = v11(v23,v6,v11,v6,v24);
}
%NeverOptimizeFunction(main);
main();
