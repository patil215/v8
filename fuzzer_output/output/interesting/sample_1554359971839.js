function main() {
const v1 = [13.37,13.37];
function v2(v3,v4,v5,v6) {
}
function v7(v8,v9,v10,v11) {
    const v16 = [13.37,13.37,13.37,13.37];
    function v20(v21,v22,v23,v24) {
    }
    const v28 = {get:v20,set:v20};
    const v30 = Object.defineProperty(v16,1,v28);
    const v31 = new Proxy(v16,Reflect,1337);
    const v32 = {__defineGetter__:ArrayBuffer,resolve:1337,of:v20,...v31,...1337,...Reflect};
    const v34 = [13.37,13.37,13.37,13.37,13.37];
    const v36 = [4010874312,4010874312,v10,4010874312];
    const v37 = [v34];
    const v38 = {LN10:Boolean,clear:v34,multiline:"number",isSafeInteger:v34,clear:1337,assign:v37,call:13.37};
    const v39 = {parseFloat:v36,asinh:4010874312,lastMatch:v38,subarray:1337,toExponential:4010874312};
    let v40 = v39;
    function v42(v43,v44,v45,v46) {
        let v48 = v7;
        const v49 = new Promise(v48,v43,171682.5863228757,v44);
    }
    const v51 = {construct:v42,defineProperty:v42,get:v42,set:v42,apply:v42,call:v42,ownKeys:v42,preventExtension:v42};
    const v53 = new Promise(Function,v51);
    const v54 = v42(v39,v53,v40,"number");
}
const v55 = {preventExtension:v7,get:v2,deleteProperty:v7,has:v7,defineProperty:v7,getOwnPropertyDescriptor:v2,call:v2,set:v7,ownKeys:v7,setPrototypeOf:v2,construct:v7};
const v57 = new Proxy(v1,v55);
const v59 = {toLocaleLowerCase:v7};
const v61 = Reflect.defineProperty(v57,1337,v59);
}
%NeverOptimizeFunction(main);
main();
