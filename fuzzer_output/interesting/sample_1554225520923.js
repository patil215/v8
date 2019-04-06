function main() {
const v1 = [1337];
const v3 = [13.37,13.37];
function v4(v5,v6,v7,v8) {
}
function v9(v10,v11,v12,v13) {
    function v15(v16,v17,v18,v19) {
    }
    const v21 = {set:v15,get:v15};
    for (let v26 = 0; v26 < 1337; v26++) {
        const v27 = 1 - v26;
        const v28 = [v27];
        let v29 = v28;
        const v33 = [1337,1337,1337];
        const v34 = [v33,v29,"number",this];
        for (const v35 of v34) {
            v35[v29] = v35;
        }
    }
    const v36 = Object.preventExtensions(this,1476529794,v21);
    const v40 = Object.seal(this,-4096);
}
const v41 = {preventExtension:v9,get:v4,deleteProperty:v9,has:v9,defineProperty:v9,getOwnPropertyDescriptor:v4,call:v4,set:v9,ownKeys:v9,setPrototypeOf:v4,construct:v9};
const v43 = new Proxy(v3,v41);
const v45 = {length:v9};
const v47 = Reflect.defineProperty(v43,1337,v45);
}
%NeverOptimizeFunction(main);
main();
