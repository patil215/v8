function main() {
const v1 = [13.37,13.37];
function v2(v3,v4,v5,v6) {
}
function v7(v8,v9,v10,v11) {
    function v13(v14,v15,v16,v17) {
    }
    const v19 = {set:v11,get:v13};
    for (let v24 = 0; v24 < 1337; v24++) {
        const v25 = 1 - v24;
        const v26 = [v25];
        let v27 = v26;
        const v32 = [1337,1337,1337];
        const v33 = [v32,13.37,"number",this];
        for (const v34 of v33) {
            v34[v27] = v34;
        }
    }
    const v35 = Object.seal(this,328487167,v19);
    const v39 = Object.freeze(this,1513507877);
}
const v40 = {preventExtension:v7,get:v2,deleteProperty:v7,has:v7,defineProperty:v7,getOwnPropertyDescriptor:v2,call:v2,set:v7,ownKeys:v7,setPrototypeOf:v2,construct:v7};
const v42 = new Proxy(v1,v40);
const v44 = {length:v7};
const v46 = Reflect.defineProperty(v42,1337,v44);
}
%NeverOptimizeFunction(main);
main();
