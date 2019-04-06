function main() {
const v1 = [13.37,13.37];
function v2(v3,v4,v5,v6) {
}
function v7(v8,v9,v10,v11) {
    const v13 = [13.37,13.37];
    function v14(v15,v16,v17,v18) {
    }
    function v19(v20,v21,v22,v23) {
    }
    const v24 = {preventExtension:v19,get:v14,deleteProperty:v19,has:v19,defineProperty:v19,getOwnPropertyDescriptor:v14,call:v14,set:v19,ownKeys:v19,setPrototypeOf:v14,construct:v19};
    const v26 = new Proxy(v13,v24);
    const v31 = [13.37];
    const v33 = ["undefined"];
    const v34 = {split:-389108317,min:Boolean,concat:Boolean,getInt16:v33,reverse:13.37,getOwnPropertySymbols:v33,raw:-389108317,assign:1337,startsWith:v33};
    const v35 = {isView:"undefined",isSealed:Boolean,isFrozen:v34};
    let v36 = v31;
    const v38 = [4294967295,4294967295,4294967295,4294967295,4294967295];
    const v40 = [13.37];
    const v43 = new Int16Array(v38,8154,v40);
    const v44 = v43.indexOf(13.37,v35,13.37,v36);
}
const v45 = {preventExtension:v7,get:v2,deleteProperty:v7,has:v7,defineProperty:v7,getOwnPropertyDescriptor:v2,call:v2,set:v7,ownKeys:v7,setPrototypeOf:v2,construct:v7};
const v47 = new Proxy(v1,v45);
const v49 = {NaN:v7};
const v51 = Reflect.defineProperty(v47,1337,v49);
}
%NeverOptimizeFunction(main);
main();
