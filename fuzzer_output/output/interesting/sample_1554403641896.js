function main() {
const v2 = [];
const v3 = {keyFor:"undefined",race:1337,trimEnd:1337,stackTraceLimit:1337,ignoreCase:v2,acosh:v2};
const v5 = [13.37,13.37];
function v6(v7,v8,v9,v10) {
}
function v11(v12,v13,v14,v15) {
    const v18 = [13.37,13.37];
    function v19(v20,v21,v22,v23) {
    }
    function v24(v25,v26,v27,v28) {
    }
    const v29 = {preventExtension:v24,get:v19,deleteProperty:v24,has:v24,defineProperty:v24,getOwnPropertyDescriptor:v19,call:v19,set:v24,ownKeys:v24,setPrototypeOf:v19,construct:v24};
    const v31 = new Proxy(v18,v29);
    const v36 = [1337,1337,1337];
    const v37 = Reflect.set(v31,v36,13.37,1337,1337);
}
const v38 = {preventExtension:v11,get:v6,deleteProperty:v11,has:v11,defineProperty:v11,getOwnPropertyDescriptor:v6,call:v6,set:v11,ownKeys:v11,setPrototypeOf:v6,construct:v11};
const v40 = new Proxy(v5,v38);
const v41 = "undefined"[v3];
const v42 = v11(v40,v6,v11,v6,v41);
}
%NeverOptimizeFunction(main);
main();
