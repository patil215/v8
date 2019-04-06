function main() {
const v1 = [13.37,13.37];
function v2(v3,v4,v5,v6) {
}
function v7(v8,v9,v10,v11) {
    const v15 = new Float32Array(7);
    const v18 = [1337];
    const v21 = v15.fill(Error,v11);
}
const v22 = {preventExtension:v7,get:v2,deleteProperty:v7,has:v7,defineProperty:v7,getOwnPropertyDescriptor:v2,call:v2,set:v7,ownKeys:v7,setPrototypeOf:v2,construct:v7};
const v24 = new Proxy(v1,v22);
const v26 = {length:v7};
const v28 = Reflect.defineProperty(v24,1337,v26);
}
%NeverOptimizeFunction(main);
main();
