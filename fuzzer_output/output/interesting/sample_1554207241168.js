function main() {
const v1 = [13.37,13.37];
function v2(v3,v4,v5,v6) {
}
function v7(v8,v9,v10,v11) {
    const v13 = [-2.220446049250313e-16,-2.220446049250313e-16];
    function v14(v15,v16,v17,v18) {
    }
    function v19(v20,v21,v22,v23) {
    }
    const v25 = new Proxy(v13,v14);
    const v27 = {set:v19};
    const v28 = v25.hasOwnProperty(v25,-9007199254740993,v27);
}
const v29 = {preventExtension:v7,get:v2,deleteProperty:v7,has:v7,defineProperty:v7,getOwnPropertyDescriptor:v2,call:v2,set:v7,ownKeys:v7,setPrototypeOf:v2,construct:v7};
const v31 = new Proxy(v1,v29);
const v33 = {length:v7};
const v35 = Reflect.defineProperty(v31,1337,v33);
}
%NeverOptimizeFunction(main);
main();
