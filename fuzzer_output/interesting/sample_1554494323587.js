function main() {
const v1 = [13.37,13.37];
function v2(v3,v4,v5,v6) {
}
function v7(v8,v9,v10,v11) {
    function v14(v15,v16,v17,v18) {
    }
    const v20 = new Proxy(Array,Reflect);
    const v22 = {set:v14};
    const v24 = Object.freeze(v20,-9007199254740993,v22);
}
const v25 = {preventExtension:v7,get:v2,deleteProperty:v7,has:v7,defineProperty:v7,getOwnPropertyDescriptor:v2,call:v2,set:v7,ownKeys:v7,setPrototypeOf:v2,construct:v7};
const v27 = new Proxy(v1,v25);
const v29 = {length:v7};
const v31 = Reflect.defineProperty(v27,1337,v29);
}
%NeverOptimizeFunction(main);
main();
