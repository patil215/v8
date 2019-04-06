function main() {
const v7 = [13.37,13.37];
function v8(v9,v10,v11,v12) {
}
function v13(v14,v15,v16,v17) {
}
const v21 = {preventExtension:v13,acos:v8,deleteProperty:v13,has:v13,defineProperty:v13,getOwnPropertyDescriptor:v8,call:v8,set:v13,ownKeys:v13,setPrototypeOf:v8,construct:v13};
const v23 = new Proxy(v7,v21);
const v25 = null === v23;
}
%NeverOptimizeFunction(main);
main();
