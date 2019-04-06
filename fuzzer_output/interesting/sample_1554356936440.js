function main() {
const v1 = [13.37,13.37];
function v2(v3,v4,v5,v6) {
}
function v7(v8,v9,v10,v11) {
    const v14 = new BigUint64Array(7);
    const v15 = v14.fill(v9,v11);
}
const v16 = {preventExtension:v7,get:v2,deleteProperty:v7,has:v7,defineProperty:v7,getOwnPropertyDescriptor:v2,call:v2,set:v7,ownKeys:v7,setPrototypeOf:v2,construct:v7};
const v18 = new Proxy(v1,v16);
const v20 = {length:v7};
const v22 = Reflect.defineProperty(v18,4096,v20);
}
%NeverOptimizeFunction(main);
main();
