function main() {
const v0 = [];
const v2 = [13.37,v0];
function v3(v4,v5,v6,v7) {
}
function v8(v9,v10,v11,v12) {
    const v15 = [];
    const v16 = {keyFor:"undefined",race:1337,trimEnd:1337,stackTraceLimit:1337,ignoreCase:v15,acosh:v15};
    const v18 = [13.37,13.37];
    function v19(v20,v21,v22,v23) {
    }
    function v24(v25,v26,v27,v28) {
        this.__proto__ = v25;
    }
    const v30 = {preventExtension:v24,get:v19,deleteProperty:v24,has:v24,defineProperty:v24,getOwnPropertyDescriptor:v19,call:v19,set:"undefined",ownKeys:v24,setPrototypeOf:v19,construct:v24};
    const v32 = new Proxy(v18,v30);
    const v33 = "undefined"[v16];
    const v34 = v24(v32,v19,v24,v19,v33);
}
const v35 = {preventExtension:v8,get:v3,deleteProperty:v8,has:v8,defineProperty:v8,getOwnPropertyDescriptor:v3,call:v3,set:v8,ownKeys:v8,setPrototypeOf:v3,construct:v8};
const v37 = new Proxy(v2,v35);
const v39 = {length:v8};
const v41 = Reflect.defineProperty(v37,1337,v39);
const v44 = [13.37,1337];
function v45(v46,v47,v48,v49) {
}
function v50(v51,v52,v53,v54) {
    return getFloat64;
}
const v56 = {preventExtension:v50,get:v45,deleteProperty:v50,has:v50,defineProperty:v50,getOwnPropertyDescriptor:v45,call:v45,set:v50,ownKeys:v50,setPrototypeOf:v45,construct:v50};
const v58 = new Proxy(v44,v56);
const v59 = {toLocaleLowerCase:v50};
const v61 = Reflect.defineProperty(v58,v50,v59);
}
%NeverOptimizeFunction(main);
main();
