function main() {
const v1 = [1337];
const v6 = [13.37];
const v8 = [1337,1337,1337];
const v9 = [v8,13.37,"number",Set];
const v10 = {getUint8:v9,create:16,getPrototypeOf:"number",getOwnPropertyDescriptor:16,setInt16:v6,toStringTag:v8,filter:13.37};
const v11 = {ceil:1337,log1p:1337,c:v9};
function v16(v17,v18,v19,v20,v21) {
    function v22(v23,v24,v25,v26) {
        'use strict'
    }
    function v29(v30,v31,v32,v33) {
    }
    function v37(v38,v39,v40,v41) {
        let v43 = 13.37;
        let v45 = "undefined";
        for (let v52 = 0; v52 != 100; v52++) {
            for (const v54 in Function) {
                let v57 = "undefined";
            }
        }
        for (const v63 in v45) {
            const v64 = {preventExtension:v16,set:v22,ownKeys:v22,getOwnPropertyDescriptor:v29,defineProperty:v37,isExtensible:v29};
            const v66 = new Proxy(v1,v64);
        }
    }
    const v72 = [1337];
    const v73 = v37(10,Function,1337,v72,Function);
}
const v77 = v16("undefined",1337,13.37,Math);
const v78 = v16(100,v10,v11,0,Math);
}
%NeverOptimizeFunction(main);
main();
