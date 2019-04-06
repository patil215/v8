function main() {
const v1 = [13.37,13.37];
function v2(v3,v4,v5,v6) {
}
function v7(v8,v9,v10,v11) {
    const v14 = 1386095671 * 1.7976931348623157e+308;
    return v14;
}
const v15 = {preventExtension:v7,get:v2,deleteProperty:v7,has:v7,defineProperty:v7,getOwnPropertyDescriptor:v2,call:v2,set:v7,ownKeys:v7,setPrototypeOf:v2,construct:v7};
const v17 = new Proxy(v1,v15);
const v19 = {length:v7};
const v21 = Reflect.defineProperty(v17,1337,v19);
}
%NeverOptimizeFunction(main);
main();
