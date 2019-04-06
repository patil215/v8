function main() {
const v5 = [1337,1337,1337,1337];
const v6 = ["rightContext"];
const v7 = {reduce:v6};
const v15 = [13.37,13.37];
function v16(v17,v18,v19,v20) {
}
function v21(v22,v23,v24,v25) {
}
const v29 = {preventExtension:v21,acos:v16,deleteProperty:v21,has:v21,defineProperty:v21,getOwnPropertyDescriptor:v16,call:v16,set:v21,ownKeys:v21,setPrototypeOf:v16,construct:v21};
const v31 = new Proxy(v15,v29);
const v34 = v21(WeakSet,v15,v7,v15,v5);
const v35 = null === v31;
}
%NeverOptimizeFunction(main);
main();
