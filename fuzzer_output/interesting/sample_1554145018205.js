function main() {
const v2 = [13.37,13.37];
let v4 = 13.37;
function v5(v6,v7,v8,v9) {
    return String;
}
function v10(v11,v12,v13,v14) {
    return v4;
}
const v15 = {preventExtension:v10,get:v5,deleteProperty:v10,has:v10,defineProperty:v10,getOwnPropertyDescriptor:v5,call:v5,set:v10,ownKeys:v10,setPrototypeOf:v5,construct:v10};
const v17 = new Proxy(v2,v15);
const v18 = {set:v10};
const v20 = Object.defineProperty(v17,v17,v18);
}
%NeverOptimizeFunction(main);
main();
