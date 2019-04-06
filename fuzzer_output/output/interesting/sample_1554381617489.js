function main() {
const v2 = {fromCodePoint:4017940240,bind:"substring"};
const v5 = [13.37,13.37];
function v6(v7,v8,v9,v10) {
    return Symbol;
}
function v11(v12,v13,v14,v15) {
}
const v17 = {preventExtension:v11,get:v6,deleteProperty:v11,has:v11,defineProperty:Symbol,getOwnPropertyDescriptor:v6,call:v6,set:v11,getFloat32:v11,setPrototypeOf:v6,construct:v11};
const v19 = new Proxy(v5,v17);
const v20 = v19 in v2;
}
%NeverOptimizeFunction(main);
main();
