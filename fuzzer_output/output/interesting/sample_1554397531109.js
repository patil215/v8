function main() {
let v3 = 0;
const v7 = v3 + 1;
v3 = v7;
const v8 = [13.37,13.37];
function v9(v10,v11,v12,v13) {
}
function v14(v15,v16,v17,v18) {
    function v20(v21,v22,v23,v24) {
    }
    const v25 = {set:v18,get:v20};
    const v26 = typeof v25;
    const v28 = v26 === "object";
    function v34(v35,v36,v37,v38) {
    }
    let v40 = "object";
    const v41 = v40.toLocaleLowerCase(v40,2147483648,"object",v40,2147483648);
    function v42(v43,v44,v45,v46) {
    }
    const v48 = {get:v42,set:v34};
    const v50 = Object.defineProperty(this,v41,v48);
    const v54 = v50["object"];
    for (let v57 = 0; v57 < 1337; v57++) {
        const v62 = [1337,1337,1337];
        const v63 = [v62,13.37,"number",this];
    }
}
const v64 = v14(v8,0);
const v65 = {preventExtension:v14,get:v9,deleteProperty:v14,has:v14,defineProperty:v14,getOwnPropertyDescriptor:v9,call:v9,set:v14,ownKeys:v14,setPrototypeOf:v9,construct:v14};
const v67 = new Proxy(v8,v65);
const v69 = {length:v14};
const v71 = Reflect.defineProperty(v67,1337,v69);
}
%NeverOptimizeFunction(main);
main();
