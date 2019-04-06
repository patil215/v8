function main() {
const v2 = [];
const v3 = {keyFor:"undefined",race:1337,trimEnd:1337,stackTraceLimit:1337,ignoreCase:v2,acosh:v2};
const v5 = [13.37,13.37];
function v6(v7,v8,v9,v10) {
}
function v11(v12,v13,v14,v15) {
    const v17 = [13.37];
    const v19 = [-1544203427,-1544203427,-1544203427,-1544203427];
    const v21 = new Int32Array(v17);
    const v23 = v21.subarray(v21,-1544203427,1,v19,1);
}
const v24 = {preventExtension:v11,get:v6,deleteProperty:v11,has:v11,defineProperty:v11,getOwnPropertyDescriptor:v6,call:v6,set:v11,ownKeys:v11,setPrototypeOf:v6,construct:v11};
const v26 = new Proxy(v5,v24);
const v27 = "undefined"[v3];
const v28 = v11(v26,v6,v11,v6,v27);
}
%NeverOptimizeFunction(main);
main();
