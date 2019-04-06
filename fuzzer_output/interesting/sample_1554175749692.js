function main() {
const v1 = {atan:-32997452};
const v4 = [];
const v5 = {keyFor:"undefined",race:1337,trimEnd:1337,stackTraceLimit:1337,ignoreCase:v4,acosh:v4};
const v10 = [13.37,13.37];
function v11(v12,v13,v14,v15) {
}
function v16(v17,v18,v19,v20) {
    Boolean.__proto__ = v17;
    let v24 = 0;
    do {
        const v25 = v24 + 1;
        v24 = v25;
        const v26 = Boolean.sign;
    } while (v24 < 8);
    let v29 = 0;
    const v30 = v29 + 1;
    v29 = v30;
}
const v31 = {preventExtension:v16,get:v11,deleteProperty:v16,has:v16,defineProperty:v16,getOwnPropertyDescriptor:v11,call:v11,set:"undefined",ownKeys:v16,setPrototypeOf:v11,construct:v16};
const v33 = new Proxy(v10,v31);
const v34 = "undefined"[v5];
const v35 = v16(v33,v11,v16,v11,v34);
}
%NeverOptimizeFunction(main);
main();
