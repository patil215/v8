function main() {
const v2 = [];
const v3 = {keyFor:"undefined",race:1337,trimEnd:1337,stackTraceLimit:1337,ignoreCase:v2,acosh:v2};
const v5 = [13.37,13.37];
function v6(v7,v8,v9,v10) {
}
function v11(v12,v13,v14,v15) {
    const v18 = new Float32Array(36344);
    for (let v22 = 0; v22 < 100; v22++) {
        const v24 = v18[1];
        const v25 = 1 > v24;
        const v28 = [13.37,10,13.37,13.37];
        for (const v29 of v28) {
            for (let v32 = 0; v32 < 10; v32++) {
                function v33(v34,v35,v36,v37) {
                    function v38(v39,v40) {
                    }
                    const v48 = arguments[v15];
                    const v50 = v38(...arguments);
                }
                const v56 = [536870912];
                const v57 = v33(10,Function,127,v56,Function);
            }
        }
    }
}
const v58 = {preventExtension:v11,get:v6,deleteProperty:v11,has:v11,defineProperty:v11,getOwnPropertyDescriptor:v6,call:v6,set:v11,ownKeys:v11,setPrototypeOf:v6,construct:v11};
const v60 = new Proxy(v5,v58);
const v61 = "undefined"[v3];
const v62 = v11(v60,v6,v11,v6,v61);
}
%NeverOptimizeFunction(main);
main();
