function main() {
const v4 = [];
const v5 = {keyFor:"undefined",race:1337,trimEnd:1337,stackTraceLimit:1337,ignoreCase:v4,acosh:v4};
const v7 = [13.37,13.37];
function v8(v9,v10,v11,v12) {
}
function v13(v14,v15,v16,v17) {
    const v18 = [1337];
    v18[128] = -3935124385;
    const v20 = new Int32Array(v18);
}
const v21 = {preventExtension:v13,get:v8,deleteProperty:v13,has:v13,defineProperty:v13,getOwnPropertyDescriptor:v8,call:v8,set:v13,ownKeys:v13,setPrototypeOf:v8,construct:v13};
const v23 = new Proxy(v7,v21);
const v24 = "undefined"[v5];
const v25 = v13(v23,v8,v13,v8,v24);
}
%NeverOptimizeFunction(main);
main();
