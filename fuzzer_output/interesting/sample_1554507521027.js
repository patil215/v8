function main() {
const v1 = [13.37,13.37];
function v2(v3,v4,v5,v6) {
}
function v7(v8,v9,v10,v11) {
    const v15 = [13.37,13.37];
    function v16(v17,v18,v19,v20) {
    }
    function v21(v22,v23,v24,v25) {
    }
    const v26 = {preventExtension:v21,get:v16,deleteProperty:v21,has:v21,defineProperty:v21,getOwnPropertyDescriptor:v16,call:v16,set:v21,ownKeys:v21,setPrototypeOf:v16,construct:v21};
    const v31 = new Proxy(v15,v26);
    const v33 = {length:v21};
    const v35 = Reflect.getOwnPropertyDescriptor(v31,1337,v33);
    const v38 = [13.37,13.37,13.37,13.37,13.37];
    const v40 = [4010874312,4010874312,v10,4010874312];
    const v41 = [v38];
    const v42 = {LN10:Boolean,clear:v38,multiline:"number",isSafeInteger:v38,exec:-1984769435,assign:v41,call:13.37};
    const v43 = {parseFloat:v40,asinh:4010874312,lastMatch:v42,subarray:-1984769435,toExponential:4010874312};
    let v44 = v43;
    function v46(v47,v48,v49,v50) {
        let v52 = v7;
        const v53 = new Promise(v52,v47,13.37,v48);
    }
    const v55 = {construct:v46,defineProperty:v46,get:v46,set:v46,apply:v46,call:v46,ownKeys:v46,preventExtension:v46};
    const v57 = new Promise(Function,v55);
    const v58 = v46(v43,v57,v44,"number");
}
const v59 = {preventExtension:v7,get:v2,deleteProperty:v7,has:v7,defineProperty:v7,getOwnPropertyDescriptor:v2,call:v2,set:v7,ownKeys:v7,setPrototypeOf:v2,construct:v7};
const v61 = new Proxy(v1,v59);
const v63 = {NaN:v7};
const v65 = Reflect.defineProperty(v61,1337,v63);
}
%NeverOptimizeFunction(main);
main();
