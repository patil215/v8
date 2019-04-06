function main() {
const v2 = ["toPrimitive",1337];
const v4 = [13.37,13.37,13.37,13.37,13.37];
const v6 = [-9007199254740992,v4];
const v8 = new Uint16Array(v6);
const v10 = [13.37,v2];
function v11(v12,v13,v14,v15) {
}
function v16(v17,v18,v19,v20) {
    const v22 = {trimEnd:13.37};
    function v24(v25,v26,v27,v28) {
    }
    const v30 = {get:v24};
    const v31 = new Proxy(v30,v8,1337);
    v31.findIndex = v22;
}
const v32 = {preventExtension:v16,get:v11,deleteProperty:v16,has:v16,defineProperty:v16,getOwnPropertyDescriptor:v11,call:v11,set:v16,ownKeys:v16,setPrototypeOf:v11,construct:v16};
const v34 = new Proxy(v10,v32);
const v36 = {length:v16};
const v38 = Reflect.defineProperty(v34,1337,v36);
let v41 = 1337;
const v44 = new BigUint64Array(1337,BigUint64Array,v41,v41,0);
}
%NeverOptimizeFunction(main);
main();
