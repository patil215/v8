function main() {
const v2 = [13.37,13.37];
const v4 = [1337,1337,1337,1337,1337];
const v5 = [1337,v4,"toStringTag",v2];
const v7 = [-1000000.0,-1000000.0];
function v8(v9,v10,v11,v12) {
}
function v13(v14,v15,v16,v17) {
    const v20 = [];
    const v21 = {keyFor:"undefined",race:1337,trimEnd:1337,stackTraceLimit:1337,ignoreCase:v20,acosh:v20};
    const v23 = [13.37,13.37];
    function v24(v25,v26,v27,v28) {
    }
    function v29(v30,v31,v32,v33) {
        const v35 = v30.concat(v33,v31,-1984769435);
    }
    const v36 = {preventExtension:v29,toFixed:v24,deleteProperty:v29,has:v29,defineProperty:v29,getOwnPropertyDescriptor:v24,call:v24,set:v29,ownKeys:v29,setPrototypeOf:v24,construct:v29};
    const v38 = new Proxy(v23,v36);
    const v39 = "undefined"[v21];
    const v40 = v29(v38,v24,v29,v24,v39);
}
const v41 = {preventExtension:v13,get:v8,deleteProperty:v13,has:v13,defineProperty:v13,getOwnPropertyDescriptor:v8,call:v8,set:v13,ownKeys:v13,setPrototypeOf:v8,construct:v13};
const v43 = new Proxy(v7,v41);
const v45 = {length:v5};
const v47 = Reflect.defineProperty(v43,-268435456,v45);
}
%NeverOptimizeFunction(main);
main();
