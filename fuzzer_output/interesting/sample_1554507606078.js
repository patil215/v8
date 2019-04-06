function main() {
const v3 = [];
const v4 = {keyFor:"undefined",race:1337,trimEnd:1337,stackTraceLimit:1337,ignoreCase:v3,acosh:v3};
const v6 = [13.37,13.37];
function v7(v8,v9,v10,v11) {
}
function v12(v13,v14,v15,v16) {
    const v17 = [1337];
    v17.length = 65536;
    const v20 = new Int32Array(v17);
}
const v21 = {preventExtension:v12,get:v7,deleteProperty:v12,has:v12,defineProperty:v12,getOwnPropertyDescriptor:v7,call:v7,set:v12,ownKeys:v12,setPrototypeOf:v7,construct:v12};
const v23 = new Proxy(v6,v21);
const v24 = "undefined"[v4];
const v25 = v12(v23,v7,v12,v7,v24);
}
%NeverOptimizeFunction(main);
main();
