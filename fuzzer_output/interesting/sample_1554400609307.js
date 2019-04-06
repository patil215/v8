function main() {
const v6 = [4158826827,127];
const v7 = [];
const v8 = {input:v6,flat:ArrayBuffer,hypot:"boolean",bind:v7,join:1337};
const v10 = [13.37,13.37];
function v11(v12,v13,v14,v15) {
}
function v16(v17,v18,v19,v20) {
    const v22 = new BigInt64Array(100);
    const v23 = v22.fill(v18,13.37);
}
const v24 = {preventExtension:v16,get:v11,deleteProperty:v16,has:v16,defineProperty:v16,getOwnPropertyDescriptor:v11,call:v11,set:v16,ownKeys:v8,setPrototypeOf:v11,construct:v16};
const v26 = new Proxy(v10,v24);
const v28 = {length:v16};
const v30 = Reflect.defineProperty(v26,2998604110,v28);
}
%NeverOptimizeFunction(main);
main();
