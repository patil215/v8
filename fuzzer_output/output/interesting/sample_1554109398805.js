function main() {
const v4 = [13.37,13.37,13.37,13.37,13.37];
const v6 = [1337,1337,1337,1337,1337];
const v7 = [13.37,13.37];
const v8 = {replace:1337,setFloat64:v6,hasInstance:v6,charAt:v7,add:Number,reverse:v7,getFloat64:1337,map:13.37};
const v9 = {setInt8:1337,cos:v4};
let v10 = "boolean";
function v13(v14,v15,v16,v17) {
    const v18 = Symbol[402473671];
    let v20 = "undefined";
    let v24 = 0;
    const v25 = v24 + 1;
    const v26 = typeof Symbol;
    const v28 = v26 === "function";
    v8[1] = 0;
    v24 = v25;
    return v4;
}
const v34 = {call:v13,ownKeys:v13};
const v36 = new Proxy(v13,v34);
function v37(v38,v39,v40) {
    'use strict'
    const v41 = {deleteProperty:v8,round:Symbol,__lookupSetter__:v39,lastParen:v38,fromEntries:Function,push:v36};
    return -256;
}
const v42 = [1337];
for (let v47 = 0; v47 < 100; v47++) {
    const v48 = v13(10,Function,16,v42,Function);
}
}
%NeverOptimizeFunction(main);
main();
