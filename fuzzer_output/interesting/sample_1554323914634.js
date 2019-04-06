function main() {
const v1 = [13.37,13.37];
function v2(v3,v4,v5,v6) {
}
function v7(v8,v9,v10,v11) {
    const v15 = [13.37,13.37];
    function v16(v17,v18,v19,v20) {
    }
    function v21(v22,v23,v24,v25) {
        return v8;
    }
    const v26 = {preventExtension:v21,get:v16,deleteProperty:v21,has:v21,defineProperty:v21,getOwnPropertyDescriptor:v16,call:v16,set:v21,ownKeys:v21,setPrototypeOf:v16,construct:v21};
    const v28 = new Proxy(v15,v26);
    const v30 = {length:v21};
    const v32 = Reflect.preventExtensions(v28,1337,v30);
    const v35 = [13.37,13.37,13.37,13.37,13.37];
    const v37 = [4010874312,4010874312,v10,4010874312];
    const v38 = [v35];
    const v39 = {LN10:Boolean,clear:v35,multiline:"number",isSafeInteger:v35,exec:-1984769435,assign:v38,call:13.37};
    const v40 = {parseFloat:v37,asinh:4010874312,lastMatch:v39,subarray:-1984769435,toExponential:4010874312};
    let v41 = v40;
    function v43(v44,v45,v46,v47) {
        let v49 = v7;
        const v50 = new Promise(v49,v44,13.37,v45);
    }
    const v52 = {construct:v43,defineProperty:v43,get:v43,set:v43,apply:v43,call:v43,ownKeys:v43,preventExtension:v43};
    const v54 = new Promise(Function,v52);
    const v55 = v43(v40,v54,v41,"number");
}
const v56 = {preventExtension:v7,get:v2,deleteProperty:v7,has:v7,defineProperty:v7,getOwnPropertyDescriptor:v2,call:v2,set:v7,ownKeys:v7,setPrototypeOf:v2,construct:v7};
const v58 = new Proxy(v1,v56);
const v60 = {NaN:v7};
const v62 = Reflect.defineProperty(v58,1337,v60);
}
%NeverOptimizeFunction(main);
main();
