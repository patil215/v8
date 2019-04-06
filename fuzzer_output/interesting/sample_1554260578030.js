function main() {
const v4 = [13.37,13.37];
function v5(v6,v7,v8,v9) {
}
function v10(v11,v12,v13,v14) {
}
const v15 = {preventExtension:v10,get:v5,deleteProperty:v10,has:v10,defineProperty:v10,getOwnPropertyDescriptor:v5,call:v5,set:v10,ownKeys:v10,setPrototypeOf:v5,construct:v10};
const v18 = [13.37];
const v24 = [13.37,13.37,13.37,13.37];
const v26 = Symbol.iterator;
const v27 = {valueOf:13.37,find:v24,hypot:Map};
const v28 = new Proxy(v4,v15);
const v29 = {NaN:v10};
const v31 = Reflect.defineProperty(v28,v26,v29);
}
%NeverOptimizeFunction(main);
main();
