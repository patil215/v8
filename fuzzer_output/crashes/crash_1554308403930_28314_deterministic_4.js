function main() {
const v2 = [13.37,13.37];
function v3(v4,v5,v6,v7) {
}
function v8(v9,v10,v11,v12) {
    function v13(v14,v15,v16,v17) {
        const v20 = [13.37,13.37];
        function v21(v22,v23,v24,v25) {
        }
        function v26(v27,v28,v29,v30) {
            const v32 = [13.37,13.37,13.37,13.37,13.37];
            const v34 = v8(..."trunc",v13,...v32,"symbol");
        }
        const v35 = {preventExtension:v26,get:v21,deleteProperty:v26,has:v26,defineProperty:v26,getOwnPropertyDescriptor:9007199254740992,call:v21,set:v26,ownKeys:v26,setPrototypeOf:v21,construct:v26};
        const v37 = new Proxy(v20,v35);
        const v39 = {NaN:v26};
        const v41 = Reflect.defineProperty(v37,1337,v39);
    }
    const v43 = new Int16Array();
    const v44 = v43.indexOf();
    for (let v48 = 0; v48 < 100; v48++) {
    }
    const v49 = v13();
    return v44;
}
const v50 = {preventExtension:v8,get:v3,deleteProperty:v8,has:v8,defineProperty:v8,getOwnPropertyDescriptor:v3,call:v3,set:v8,ownKeys:v8,setPrototypeOf:v3,construct:v8};
const v52 = new Proxy(v2,v50);
const v54 = {NaN:v8};
const v56 = Reflect.defineProperty(v52,1337,v54);
}
%NeverOptimizeFunction(main);
main();
