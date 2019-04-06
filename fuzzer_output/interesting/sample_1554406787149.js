function main() {
const v3 = [1337,1337];
let v4 = v3;
const v6 = [13.37,13.37];
function v7(v8,v9,v10,v11) {
}
function v12(v13,v14,v15,v16) {
    const v18 = [13.37,13.37];
    function v19(v20,v21,v22,v23) {
    }
    function v24(v25,v26,v27,v28) {
        return v15;
    }
    const v29 = {preventExtension:v24,get:v19,deleteProperty:v24,has:v24,defineProperty:v24,getOwnPropertyDescriptor:v19,call:v19,set:gc,ownKeys:v24,setPrototypeOf:v19,construct:v24};
    const v31 = new Proxy(v18,v29);
    with (v31) {
        v4 = -2147483648;
    }
}
const v32 = {preventExtension:v12,get:v7,deleteProperty:v12,has:v12,defineProperty:v12,getOwnPropertyDescriptor:v7,call:v7,set:v12,ownKeys:v12,setPrototypeOf:v7,construct:v12};
let v36 = 0;
const v37 = v36 + 1;
v36 = v37;
const v38 = new Proxy(v6,v32);
const v39 = {toLocaleLowerCase:v36};
const v41 = Reflect.defineProperty(v38,v12,v39);
}
%NeverOptimizeFunction(main);
main();
