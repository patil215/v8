function main() {
const v1 = [13.37,13.37];
function v2(v3,v4,v5,v6) {
}
function v7(v8,v9,v10,v11) {
    const v15 = [13.37,13.37];
    function v16(v17,v18,v19,v20) {
    }
    function v21(v22,v23,v24,v25) {
        const v27 = [13.37,13.37];
        function v28(v29,v30,v31,v32) {
        }
        function v33(v34,v35,v36,v37) {
        }
        const v39 = new Proxy(v27,v28);
        const v41 = {set:v33};
        const v43 = Object.keys(v39,-9007199254740993,v41);
    }
    const v44 = {preventExtension:v21,get:v16,deleteProperty:v21,has:v21,defineProperty:v21,getOwnPropertyDescriptor:v16,call:v16,set:v21,ownKeys:v21,setPrototypeOf:v16,construct:v21};
    const v46 = new Proxy(v15,v44);
    const v48 = {length:v21};
    const v50 = Reflect.defineProperty(v46,1337,v48);
    const v53 = [13.37,13.37,13.37,13.37,13.37];
    const v55 = [4010874312,4010874312,v10,4010874312];
    const v56 = [v53];
    const v57 = {LN10:Boolean,clear:v53,multiline:"number",isSafeInteger:v53,exec:-1984769435,assign:v56,call:13.37};
    const v58 = {parseFloat:v55,asinh:4010874312,lastMatch:v57,subarray:-1984769435,toExponential:4010874312};
    let v59 = v58;
    function v61(v62,v63,v64,v65) {
        let v67 = v7;
        const v68 = new Promise(v67,v62,13.37,v63);
    }
    const v70 = {construct:v61,defineProperty:v61,get:v61,set:v61,apply:v61,call:v61,ownKeys:v61,preventExtension:v61};
    const v72 = new Promise(Function,v70);
    const v73 = v61(v58,v72,v59,"number");
}
const v74 = {preventExtension:v7,get:v2,deleteProperty:v7,has:v7,defineProperty:v7,getOwnPropertyDescriptor:v2,call:v2,set:v7,ownKeys:v7,setPrototypeOf:v2,construct:v7};
const v76 = new Proxy(v1,v74);
const v78 = {NaN:v7};
const v80 = Reflect.defineProperty(v76,1337,v78);
}
%NeverOptimizeFunction(main);
main();
