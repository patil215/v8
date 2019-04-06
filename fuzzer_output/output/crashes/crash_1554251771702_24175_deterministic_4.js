function main() {
const v1 = [13.37,13.37,13.37,13.37];
const v3 = [13.37,13.37];
function v4(v5,v6,v7,v8) {
}
function v9(v10,v11,v12,v13) {
    const v16 = [13.37,13.37];
    function v17(v18,v19,v20,v21) {
    }
    function v22(v23,v24,v25,v26) {
        const v27 = v24.codePointAt(v1);
        v27.finally = v4;
    }
    const v28 = {preventExtension:v22,get:v17,deleteProperty:v22,has:v22,defineProperty:v22,getOwnPropertyDescriptor:v17,call:v17,set:v22,isFrozen:v22,setPrototypeOf:v17,construct:v22};
    const v30 = new Proxy(v16,v28);
    const v32 = {length:v22};
    const v34 = Reflect.defineProperty(v30,1337,v32);
    let v35 = v9;
    const v36 = new Promise(v35);
}
const v37 = {preventExtension:v9,get:v4,deleteProperty:v9,has:v9,defineProperty:v9,getOwnPropertyDescriptor:v4,call:v4,set:v9,ownKeys:v9,setPrototypeOf:v4,construct:v9};
const v39 = new Proxy(v3,v37);
const v41 = {NaN:v9};
const v43 = Reflect.defineProperty(v39,1337,v41);
}
%NeverOptimizeFunction(main);
main();
