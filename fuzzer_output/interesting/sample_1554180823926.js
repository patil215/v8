function main() {
const v4 = [13.37,13.37];
const v6 = [1337,1337];
const v7 = [];
const v8 = {__defineSetter__:WeakSet,E:WeakSet,keys:13.37,__lookupGetter__:v7,shift:1337,toPrimitive:WeakSet,indexOf:13.37};
const v9 = {every:1337};
let v10 = v4;
const v11 = {keys:v6,...v4,...v8,...WeakSet};
const v12 = v4.delete;
function v14(v15,v16,v17,v18) {
    const v20 = [13.37,13.37];
    function v21(v22,v23,v24,v25) {
        return 13.37;
    }
    function v26(v27,v28,v29,v30) {
        const v31 = v18 | v26;
        return "object";
    }
    const v32 = {preventExtension:v26,get:v21,deleteProperty:1337,has:v26,defineProperty:v26,getOwnPropertyDescriptor:v21,call:v21,set:v26,ownKeys:v26,setPrototypeOf:v21,construct:v26};
    const v34 = new Proxy(v20,v32);
    const v35 = {set:v26};
    const v37 = Object.is(v34,v26,v35);
    return v37;
}
const v40 = v7[1337];
const v44 = [1000];
let v50 = 0;
do {
    const v51 = 1337 | Function;
    const v52 = v50 + 1;
    v50 = v52;
} while (v50 < 1);
const v53 = 0 & 13.37;
for (let v54 = 0; v54 < 100; v54++) {
    const v55 = v14(10,Function,1337,v44,Function);
}
}
%NeverOptimizeFunction(main);
main();
