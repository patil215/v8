function main() {
let v4 = 0;
const v5 = v4 + 1;
v4 = v5;
const v6 = [13.37,13.37];
function v7(v8,v9,v10,v11) {
}
let v14 = 0;
let v17 = 0;
const v19 = Symbol.toStringTag;
v6[v19] = v17;
const v20 = 13.37 == 0;
const v21 = v17 + 1;
v17 = v21;
function v22(v23,v24,v25,v26) {
}
const v27 = {preventExtension:v22,get:v7,deleteProperty:v22,has:v22,defineProperty:v22,getOwnPropertyDescriptor:v7,call:v7,set:v22,getInt8:v22,setPrototypeOf:v7,construct:v22};
const v29 = new Proxy(v6,v27);
const v31 = {set:v22};
const v33 = Object.getOwnPropertyNames(v29,-9007199254740993,v31);
}
%NeverOptimizeFunction(main);
main();
