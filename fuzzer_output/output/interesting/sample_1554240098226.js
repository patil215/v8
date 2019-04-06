function main() {
const v2 = [1337,1337];
let v3 = v2;
const v5 = [13.37,13.37];
function v6(v7,v8,v9,v10) {
}
function v11(v12,v13,v14,v15) {
    const v21 = [13.37,13.37];
    function v22(v23,v24,v25,v26) {
    }
    function v27(v28,v29,v30,v31) {
    }
    const v32 = {preventExtension:v27,get:v22,deleteProperty:v27,has:v27,defineProperty:v27,getOwnPropertyDescriptor:v22,call:v22,set:v27,ownKeys:v27,setPrototypeOf:v22,construct:v27};
    const v34 = new Proxy(v21,v32);
    with (v34) {
        v3 = -2147483648;
    }
    const v35 = [13.37,13.37,13.37,13.37,13.37];
    const v37 = [4010874312,4010874312,v14,4010874312];
    const v38 = [v35];
    const v39 = {LN10:Boolean,clear:v35,multiline:"R6ziXqLCY3",isSafeInteger:v35,exec:-1984769435,assign:v38,call:13.37};
    const v40 = {parseFloat:v37,asinh:4010874312,lastMatch:v39,subarray:-1984769435,toExponential:4010874312};
    let v41 = v40;
    function v43(v44,v45,v46,v47) {
        let v49 = v11;
        const v50 = new Promise(v49,v44,171682.5863228757,v45);
    }
    const v52 = {construct:v43,defineProperty:v43,get:v43,set:v43,find:v43,call:v43,ownKeys:v43,preventExtension:v43};
    const v54 = new Promise(Function,v52);
    const v55 = v43(v40,v54,v41,"R6ziXqLCY3");
}
const v56 = {preventExtension:v11,get:v6,deleteProperty:v11,has:v11,defineProperty:v11,getOwnPropertyDescriptor:v6,call:v6,set:v11,ownKeys:v11,setPrototypeOf:v6,construct:v11};
const v58 = new Proxy(v5,v56);
const v59 = {toLocaleLowerCase:v11};
const v61 = Reflect.defineProperty(v58,v11,v59);
}
%NeverOptimizeFunction(main);
main();
