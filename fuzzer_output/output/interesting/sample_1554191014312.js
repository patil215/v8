function main() {
const v1 = [13.37,13.37];
function v2(v3,v4,v5,v6) {
}
function v7(v8,v9,v10,v11) {
    const v13 = [13.37,13.37];
    function v14(v15,v16,v17,v18) {
    }
    function v19(v20,v21,v22,v23) {
    }
    const v24 = {preventExtension:v19,get:v14,deleteProperty:v19,has:v19,defineProperty:v19,getOwnPropertyDescriptor:v14,call:v14,set:v19,ownKeys:v19,setPrototypeOf:v14,construct:v19};
    const v26 = Error(v13,v24);
}
const v27 = {preventExtension:v7,get:v2,deleteProperty:v7,has:v7,defineProperty:v7,getOwnPropertyDescriptor:v2,call:v2,set:v7,ownKeys:v7,setPrototypeOf:v2,construct:v7};
const v29 = new Proxy(v1,v27);
const v30 = {toLocaleLowerCase:v7};
const v32 = Reflect.setPrototypeOf(v29,v7,v30);
}
%NeverOptimizeFunction(main);
main();
