function main() {
const v3 = [];
const v4 = {keyFor:"undefined",race:1337,trimEnd:1337,stackTraceLimit:1337,ignoreCase:v3,acosh:v3};
function v5(v6,v7,v8,v9) {
}
function v10(v11,v12,v13,v14) {
    Boolean.__proto__ = v11;
    const v18 = {set:v5,get:v5};
    const v20 = Object.defineProperty(v12,2833260436,v18);
}
const v21 = {preventExtension:v10,get:v5,deleteProperty:v10,has:v10,defineProperty:Symbol,getOwnPropertyDescriptor:v5,call:v5,set:v10,getFloat32:v10,setPrototypeOf:v5,construct:v10};
const v23 = new Proxy(v5,v21);
const v24 = "undefined"[v4];
const v25 = v10(v23,v5,v10,v5,v24);
const v28 = [];
const v29 = {keyFor:"undefined",race:1337,trimEnd:1337,stackTraceLimit:1337,ignoreCase:v28,acosh:v28};
const v31 = [13.37,13.37];
function v32(v33,v34,v35,v36) {
}
function v37(v38,v39,v40,v41) {
    const v43 = Boolean[2833260436];
}
const v44 = {preventExtension:v37,get:v32,deleteProperty:v37,has:v37,defineProperty:v37,getOwnPropertyDescriptor:v32,call:v32,set:v37,ownKeys:v37,setPrototypeOf:v32,construct:v37};
const v46 = new Proxy(v31,v44);
const v47 = "undefined"[v29];
const v48 = v37(v46,v32,v37,v32,v47);
}
%NeverOptimizeFunction(main);
main();
