function main() {
const v1 = [1337,1337];
const v2 = [v1,1337];
const v4 = [13.37,13.37];
function v5(v6,v7,v8,v9) {
}
function v10(v11,v12,v13,v14) {
    let v16 = v10;
    const v17 = new Promise(v16);
    function v18(v19,v20,v21,v22) {
        const v24 = new Float32Array();
        const v26 = [String];
        const v27 = [v26];
        const v28 = v24.lastIndexOf();
        v28[-3183134370] = v27;
    }
    const v29 = v18();
}
const v30 = {preventExtension:v10,get:v5,deleteProperty:v10,has:v10,defineProperty:v10,getOwnPropertyDescriptor:v5,call:v5,set:v10,ownKeys:v10,setPrototypeOf:v5,construct:v10};
const v32 = new Proxy(v4,v30);
const v34 = {NaN:v2};
const v36 = Reflect.defineProperty(v32,1337,v34);
}
%NeverOptimizeFunction(main);
main();
