function main() {
const v2 = [13.37,13.37];
function v3(v4,v5,v6,v7) {
}
function v8(v9,v10,v11,v12) {
    function v14(v15,v16,v17,v18) {
    }
    const v20 = {set:v12,get:v14};
    for (let v28 = 0; v28 < 1337; v28++) {
        const v29 = 13.37 - v28;
        const v30 = [v29];
        let v31 = v30;
        const v36 = [1337,1337,1337];
        const v37 = [v36,13.37,"number",this];
        for (const v38 of v37) {
            v38[v31] = v38;
        }
    }
    const v39 = Object.seal(this,328487167,v20);
    const v43 = Object.freeze(this,1513507877);
}
const v44 = {preventExtension:v8,get:v3,deleteProperty:v8,has:v8,defineProperty:v8,getOwnPropertyDescriptor:v3,call:v3,set:v8,ownKeys:v8,setPrototypeOf:v3,construct:v8};
const v46 = new Proxy(v2,v44);
const v48 = {length:v8};
const v50 = Reflect.defineProperty(v46,1337,v48);
}
%NeverOptimizeFunction(main);
main();
