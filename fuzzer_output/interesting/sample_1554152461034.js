function main() {
const v0 = [];
let v1 = v0;
const v3 = [13.37,13.37];
function v4(v5,v6,v7,v8) {
}
function v9(v10,v11,v12,v13) {
    return v1;
}
const v14 = {preventExtension:v9,get:v4,deleteProperty:v9,has:v9,defineProperty:v9,getOwnPropertyDescriptor:v4,call:v4,set:v9,ownKeys:v9,setPrototypeOf:v4,construct:v9};
const v16 = new Proxy(v3,v14);
const v18 = {set:v9};
const v20 = Reflect.isExtensible(v16,1,v18);
let v23 = 0;
const v24 = v23 + 1;
v23 = v24;
v16[0] = v20;
}
%NeverOptimizeFunction(main);
main();
