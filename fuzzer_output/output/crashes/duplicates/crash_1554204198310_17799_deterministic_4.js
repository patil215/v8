function main() {
const v1 = [13.37,13.37];
function v2(v3,v4,v5,v6) {
}
function v7(v8,v9,v10,v11) {
    const v13 = [13.37];
    const v14 = v13.indexOf();
    let v16 = v7;
    const v17 = new Promise(v16);
    return v14;
}
const v18 = {preventExtension:v7,get:v2,deleteProperty:v7,has:v7,defineProperty:v7,getOwnPropertyDescriptor:v2,call:v2,set:v7,ownKeys:v7,setPrototypeOf:v2,construct:v7};
const v20 = new Proxy(v1,v18);
const v22 = {NaN:v7};
const v24 = Reflect.defineProperty(v20,1337,v22);
const v25 = v7();
}
%NeverOptimizeFunction(main);
main();
