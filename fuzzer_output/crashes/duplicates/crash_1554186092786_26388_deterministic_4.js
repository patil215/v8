function main() {
const v2 = [13.37,13.37];
function v3(v4,v5,v6,v7) {
}
function v8(v9,v10,v11,v12) {
    const v14 = [13.37];
    const v16 = v14.indexOf();
    v16[-9007199254740991] = 13.37;
    let v20 = 0;
    while (v20 < 1) {
        const v21 = v20 + 1;
        v20 = v21;
    }
    let v22 = v8;
    const v23 = new Promise(v22);
}
const v24 = {preventExtension:v8,get:v3,deleteProperty:v8,has:v8,defineProperty:v8,getOwnPropertyDescriptor:v3,call:v3,set:v8,ownKeys:v8,setPrototypeOf:v3,construct:v8};
const v26 = new Proxy(v2,v24);
const v28 = {NaN:v8};
const v30 = Reflect.defineProperty(v26,1337,v28);
}
%NeverOptimizeFunction(main);
main();
