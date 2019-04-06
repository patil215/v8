function main() {
const v1 = [1337,1337];
const v2 = [v1,1337];
const v4 = [13.37,13.37];
function v5(v6,v7,v8,v9) {
}
function v10(v11,v12,v13,v14) {
    const v17 = new BigInt64Array();
    const v18 = v17.lastIndexOf();
    let v19 = v10;
    const v20 = new Promise(v19);
    return v18;
}
const v21 = {preventExtension:v10,get:v5,deleteProperty:v10,has:v10,defineProperty:v10,getOwnPropertyDescriptor:v5,call:v5,set:v10,ownKeys:v10,setPrototypeOf:v5,construct:v10};
const v23 = new Proxy(v4,v21);
const v25 = {NaN:v2};
const v27 = Reflect.defineProperty(v23,1337,v25);
const v28 = v10();
}
%NeverOptimizeFunction(main);
main();
