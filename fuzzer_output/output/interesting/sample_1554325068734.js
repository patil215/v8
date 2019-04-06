function main() {
const v1 = [127];
const v2 = [v1];
const v3 = {};
const v5 = new BigUint64Array(v2,v3);
const v8 = [13.37,13.37];
function v9(v10,v11,v12,v13) {
}
function v14(v15,v16,v17,v18) {
    for (let v23 = 0; v23 <= 100; v23++) {
        let v29 = undefined;
        const v30 = Math.max(100,undefined,1024);
        const v32 = [13.37,13.37];
        v29 = v30;
    }
}
const v33 = {preventExtension:v14,get:v9,deleteProperty:v14,has:v14,defineProperty:v14,getOwnPropertyDescriptor:v9,call:v9,set:v14,ownKeys:v14,setPrototypeOf:v9,construct:v14};
const v35 = new Proxy(v8,v33);
const v36 = v14(v35,v9,v14,v9,"3zWPoLio6+");
}
%NeverOptimizeFunction(main);
main();
