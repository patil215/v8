function main() {
const v1 = [13.37,13.37];
function v2(v3,v4,v5,v6) {
}
function v10(v11,v12,v13,v14) {
    const v18 = new Float32Array(4096);
    const v19 = v18.fill(Error,v14);
}
const v20 = {preventExtension:v10,get:v2,deleteProperty:v10,has:v10,defineProperty:v10,getOwnPropertyDescriptor:v2,call:v2,set:v10,ownKeys:v10,setPrototypeOf:v2,construct:v10};
const v22 = new Proxy(v1,v20);
const v24 = {length:v10};
const v26 = Reflect.defineProperty(v22,1337,v24);
}
%NeverOptimizeFunction(main);
main();
