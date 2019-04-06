function main() {
let v1 = gc;
const v2 = v1.__proto__;
const v4 = [13.37,13.37];
function v5(v6,v7,v8,v9) {
    return 13.37;
}
function v10(v11,v12,v13,v14) {
    function v15(v16,v17,v18,v19) {
    }
    const v21 = {construct:v15,defineProperty:v15,get:v15,set:v15,apply:v15,call:v15,ownKeys:v15,preventExtension:v15};
    const v23 = new Promise(Function,v21);
}
v2.toString = v5;
const v24 = {preventExtension:v10,get:v5,deleteProperty:v10,has:v10,defineProperty:v10,getOwnPropertyDescriptor:v5,call:v5,set:v10,ownKeys:v10,setPrototypeOf:v5,construct:v10};
const v26 = new Proxy(v4,v24);
const v28 = {NaN:v1};
const v30 = Reflect.defineProperty(v26,1337,v28);
}
%NeverOptimizeFunction(main);
main();
