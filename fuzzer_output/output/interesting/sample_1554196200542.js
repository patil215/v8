function main() {
const v2 = [13.37,13.37];
function v3(v4,v5,v6,v7) {
}
function v8(v9,v10,v11,v12) {
    const v14 = [13.37,13.37];
    function v15(v16,v17,v18,v19) {
    }
    function v20(v21,v22,v23,v24) {
    }
    const v25 = {preventExtension:v20,get:v15,deleteProperty:v20,has:v20,defineProperty:v20,getOwnPropertyDescriptor:v15,call:v15,set:v20,ownKeys:v20,setPrototypeOf:v15,construct:v20};
    const v27 = new Proxy(v14,v25);
    const v29 = Reflect.get(v27,v2,274759488);
}
const v30 = {preventExtension:v8,acos:v3,deleteProperty:v8,has:v8,defineProperty:v8,getOwnPropertyDescriptor:v3,call:v3,set:v8,ownKeys:v8,setPrototypeOf:v3,construct:v8};
const v32 = new Proxy(v2,v30);
const v34 = {length:v8};
const v36 = Reflect.defineProperty(v32,1337,v34);
}
%NeverOptimizeFunction(main);
main();
