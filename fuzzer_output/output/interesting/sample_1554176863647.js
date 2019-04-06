function main() {
const v5 = [1337];
let v7 = undefined;
const v9 = [13.37,13.37];
function v10(v11,v12,v13,v14) {
}
function v15(v16,v17,v18,v19) {
    function v24(v25,v26,v27,v28) {
    }
    const v30 = {set:v24,get:v24};
    const v32 = Object.preventExtensions(this,1476529794,v30);
    const v36 = Object.seal(this,-4096);
}
const v40 = {preventExtension:v15,get:v10,deleteProperty:v15,has:v15,defineProperty:v15,getOwnPropertyDescriptor:v10,call:v10,set:v15,ownKeys:v15,setPrototypeOf:v10,construct:v15};
const v42 = new Proxy(v9,v40);
const v44 = {length:v15};
const v46 = Reflect.defineProperty(v42,1337,v44);
}
%NeverOptimizeFunction(main);
main();
