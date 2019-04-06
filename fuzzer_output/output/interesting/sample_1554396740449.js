function main() {
const v7 = [1337,127];
const v8 = [];
const v9 = {input:v7,flat:ArrayBuffer,hypot:"boolean",bind:v8,join:1337};
const v11 = [13.37,13.37];
function v12(v13,v14,v15,v16) {
}
function v17(v18,v19,v20,v21) {
    const v23 = new BigInt64Array(100);
    const v24 = v23.fill(v19,v21);
}
const v25 = {preventExtension:v17,get:v12,deleteProperty:v17,has:v17,defineProperty:v17,getOwnPropertyDescriptor:v12,call:v12,set:v17,ownKeys:v9,setPrototypeOf:v12,construct:v17};
const v27 = new Proxy(v11,v25);
const v29 = {length:v17};
const v31 = Reflect.defineProperty(v27,2998604110,v29);
}
%NeverOptimizeFunction(main);
main();
