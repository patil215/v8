function main() {
const v2 = [13.37,13.37];
const v4 = [1337,1337,1337,1337];
const v5 = {endsWith:1337,exec:1337};
const v6 = {log10:v2,every:v5,sticky:WeakSet,getUint32:v5,exec:WeakSet,for:1337,defineProperties:v2,EPSILON:v2};
const v8 = [13.37,13.37];
function v9(v10,v11,v12,v13) {
}
function v14(v15,v16,v17,v18) {
}
const v19 = {preventExtension:v14,get:v9,deleteProperty:v14,has:v14,defineProperty:v14,getOwnPropertyDescriptor:v9,call:v9,set:v14,ownKeys:v14,setPrototypeOf:v9,construct:v14};
const v21 = new Proxy(v8,v19);
const v23 = v4.toLocaleString(v6,v21,"symbol");
}
%NeverOptimizeFunction(main);
main();
