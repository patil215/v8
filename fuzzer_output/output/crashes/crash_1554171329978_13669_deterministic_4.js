function main() {
const v1 = [13.37,13.37];
function v2(v3,v4,v5,v6) {
}
function v7(v8,v9,v10,v11) {
    const v13 = [13.37];
    const v15 = [4294967295,4294967295];
    const v16 = v13.indexOf();
    function v18(v19,v20,v21,v22) {
        let v23 = v7;
        const v24 = new Promise(v23);
    }
    const v25 = v18();
    const v26 = v18(v15,v16);
}
const v27 = {preventExtension:v7,get:v2,deleteProperty:v7,has:v7,defineProperty:v7,getOwnPropertyDescriptor:v2,call:v2,set:v7,ownKeys:v7,setPrototypeOf:v2,construct:v7};
const v29 = new Proxy(v1,v27);
const v31 = {NaN:v7};
const v33 = Reflect.defineProperty(v29,1337,v31);
}
%NeverOptimizeFunction(main);
main();
