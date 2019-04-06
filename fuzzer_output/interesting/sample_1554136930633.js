function main() {
const v1 = [13.37,13.37];
let v3 = 13.37;
function v4(v5,v6,v7,v8) {
}
function v9(v10,v11,v12,v13) {
    return v3;
}
const v14 = {preventExtension:v9,get:v4,deleteProperty:v9,has:v9,defineProperty:v9,getOwnPropertyDescriptor:v4,call:v4,set:v9,ownKeys:v9,setPrototypeOf:v4,construct:v9};
const v16 = new Proxy(v1,v14);
const v18 = {set:v9};
let v22 = 0;
const v23 = v22 + 1;
v22 = v23;
const v25 = {get:v4,set:v4};
const v27 = Object.defineProperty(v18,"construct",v25);
const v28 = Object.defineProperty(v16,-9007199254740993,v18);
}
%NeverOptimizeFunction(main);
main();
