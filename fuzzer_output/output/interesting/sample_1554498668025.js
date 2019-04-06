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
        const v46 = Object.getOwnPropertySymbols(v39,-9007199254740993,v41);
    }
    const v47 = {preventExtension:v21,get:v16,deleteProperty:v21,has:v21,defineProperty:v21,getOwnPropertyDescriptor:v16,call:v16,set:v21,ownKeys:v21,setPrototypeOf:v16,construct:v21};
    const v49 = new Proxy(v15,v47);
    const v51 = {length:v21};
    const v53 = Reflect.defineProperty(v49,1337,v51);
    const v56 = [13.37,13.37,13.37,13.37,13.37];
    const v58 = [4010874312,4010874312,v10,4010874312];
    const v59 = [v56];
    const v60 = {LN10:Boolean,clear:v56,multiline:"number",isSafeInteger:v56,exec:-1984769435,assign:v59,call:13.37};
    const v61 = {parseFloat:v58,test:4010874312,lastMatch:v60,subarray:-1984769435,toExponential:4010874312};
    let v62 = v61;
    function v64(v65,v66,v67,v68) {
        let v70 = v7;
        const v71 = new Promise(v70,v65,13.37,v66);
    }
    const v73 = {construct:v64,defineProperty:v64,get:v64,set:v64,apply:v64,call:v64,ownKeys:v64,preventExtension:v64};
    const v75 = new Promise(Function,v73);
    const v76 = v64(v61,v75,v62,"number");
}
const v77 = {preventExtension:v7,get:v2,deleteProperty:v7,has:v7,defineProperty:v7,getOwnPropertyDescriptor:v2,call:v2,set:v7,ownKeys:v7,setPrototypeOf:v2,construct:v7};
const v79 = new Proxy(v1,v77);
const v81 = {NaN:v7};
const v83 = Reflect.defineProperty(v79,127,v81);
}
%NeverOptimizeFunction(main);
main();
