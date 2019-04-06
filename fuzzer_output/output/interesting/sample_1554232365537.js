function main() {
const v2 = [13.37,13.37];
function v3(v4,v5,v6,v7) {
}
function v8(v9,v10,v11,v12) {
    function v13(v14,v15,v16,v17) {
    }
    function v18(v19,v20,v21,v22) {
    }
    const v24 = new BigInt64Array(Reflect,v13);
    const v26 = {set:v18};
    const v28 = Object.freeze(v24,-9007199254740993,v26);
}
const v29 = {preventExtension:v8,get:v3,deleteProperty:v8,has:v8,defineProperty:v8,getOwnPropertyDescriptor:v3,call:v3,set:v8,ownKeys:v8,setPrototypeOf:v3,construct:v8};
const v31 = new Proxy(v2,v29);
const v33 = {length:v8};
const v35 = Reflect.defineProperty(v31,1337,v33);
}
%NeverOptimizeFunction(main);
main();
