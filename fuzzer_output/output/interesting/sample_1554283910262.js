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
    const v25 = new Proxy(v13,v14);
    const v27 = {set:v19};
    const v29 = Object.keys(v25,-9007199254740993,v27);
}
const v30 = {preventExtension:v7,get:v2,deleteProperty:v7,has:v7,defineProperty:v7,getOwnPropertyDescriptor:v2,call:v2,set:v7,ownKeys:v7,setPrototypeOf:v2,construct:v7};
const v32 = new Proxy(v1,v30);
const v34 = {length:v7};
const v36 = Reflect.defineProperty(v32,1337,v34);
}
%NeverOptimizeFunction(main);
main();
