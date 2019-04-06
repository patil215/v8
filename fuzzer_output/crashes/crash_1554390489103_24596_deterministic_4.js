function main() {
const v1 = [1337,1337];
const v2 = [v1,1337];
const v4 = [13.37,13.37];
function v5(v6,v7,v8,v9) {
}
function v10(v11,v12,v13,v14) {
    let v17 = v10;
    const v18 = new Promise(v17);
    function v19(v20,v21,v22,v23) {
        const v25 = new Int32Array();
        const v26 = v25.lastIndexOf();
        const v27 = (-1984769435)[v26];
    }
    const v28 = v19();
}
const v29 = {preventExtension:v10,get:v5,deleteProperty:v10,has:v10,defineProperty:v10,getOwnPropertyDescriptor:v5,call:v5,set:v10,ownKeys:v10,setPrototypeOf:v5,construct:v10};
const v31 = new Proxy(v4,v29);
const v33 = {NaN:v2};
const v35 = Reflect.defineProperty(v31,1337,v33);
}
%NeverOptimizeFunction(main);
main();
