function main() {
const v2 = [13.37,13.37];
function v3(v4,v5,v6,v7) {
}
function v8(v9,v10,v11,v12) {
    const v14 = new BigUint64Array(13.37);
    const v15 = v14.fill(v10,v12);
}
const v16 = {preventExtension:v8,get:v3,deleteProperty:v8,has:v8,defineProperty:v8,getOwnPropertyDescriptor:v3,call:v3,set:v8,ownKeys:v8,setPrototypeOf:v3,construct:v8};
const v18 = new Proxy(v2,v16);
const v20 = {length:v8};
const v22 = Reflect.defineProperty(v18,4096,v20);
}
%NeverOptimizeFunction(main);
main();
