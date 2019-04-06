function main() {
const v1 = [13.37,13.37];
function v2(v3,v4,v5,v6) {
}
function v7(v8,v9,v10,v11) {
}
const v12 = {preventExtension:v7,get:v2,deleteProperty:v7,has:v7,defineProperty:v7,getOwnPropertyDescriptor:v2,call:v2,set:v7,ownKeys:v7,setPrototypeOf:v2,construct:v7};
const v14 = Object(v1,v12);
const v15 = {set:v7};
const v17 = Object.defineProperties(v14,Object,v15);
}
%NeverOptimizeFunction(main);
main();
