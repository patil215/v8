function main() {
const v1 = [1337,1337,1337,1337];
function v2(v3,v4,v5,v6) {
    const v8 = [13.37,13.37,13.37,13.37];
    const v11 = [13.37,13.37,13.37,13.37,13.37];
    const v13 = [1337,1337,1337,1337,1337];
    const v14 = [13.37,13.37];
    const v15 = {replace:1337,setFloat64:v13,hasInstance:v13,charAt:v14,add:Number,reverse:v14,getFloat64:1337,map:13.37};
    const v16 = {setInt8:1337,cos:v11};
    function v18(v19,v20,v21,v22) {
        return v11;
    }
    const v24 = {call:v18,ownKeys:v18};
    const v26 = new Proxy(v18,v24);
    function v27(v28,v29,v30) {
        'use strict'
        const v31 = {deleteProperty:v15,round:Symbol,__lookupSetter__:v29,lastParen:v28,fromEntries:Function,push:v26};
    }
    for (let v38 = 0; v38 < 5; v38++) {
        v8[10] = v38;
    }
}
const v43 = [v1];
for (let v47 = 0; v47 < 100; v47++) {
    const v48 = v2(10,Function,1337,v43,Function);
}
}
%NeverOptimizeFunction(main);
main();
