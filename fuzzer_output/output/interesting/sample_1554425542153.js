function main() {
const v1 = [13.37,13.37];
function v2(v3,v4,v5,v6) {
}
function v7(v8,v9,v10,v11) {
    function v15(v16,v17,v18,v19) {
    }
    const v21 = new Proxy(this,Reflect);
    const v23 = {set:v15};
    const v25 = Object.freeze(v21,-9007199254740993,v23);
}
const v26 = {preventExtension:v7,get:v2,deleteProperty:v7,has:v7,defineProperty:v7,getOwnPropertyDescriptor:v2,call:v2,set:v7,ownKeys:v7,setPrototypeOf:v2,construct:v7};
const v28 = new Proxy(v1,v26);
const v30 = {length:v7};
const v32 = Reflect.defineProperty(v28,1337,v30);
}
%NeverOptimizeFunction(main);
main();
