function main() {
const v5 = [];
const v6 = {keyFor:"undefined",race:1337,trimEnd:1337,stackTraceLimit:1337,ignoreCase:v5,acosh:v5};
const v8 = [13.37,13.37];
function v9(v10,v11,v12,v13) {
}
function v14(v15,v16,v17,v18) {
    for (let v23 = 0; v23 < 100; v23++) {
        const v27 = [13.37,10,13.37,13.37];
        for (const v28 of v27) {
            for (let v31 = 0; v31 < 10; v31++) {
                function v32(v33,v34,v35,v36) {
                    function v37(v38,v39) {
                    }
                    const v41 = [1337,1337,1337,1337,1337];
                    function v42(v43,v44,v45,v46) {
                        for (let v50 = 0; v50 < 100; v50++) {
                            for (let v54 = 0; v54 < 100; v54++) {
                            }
                        }
                    }
                    const v59 = [v41];
                    const v60 = v42(10,Function,1337,v59,arguments);
                    const v62 = v37(...arguments);
                }
                const v67 = v32(10,1,1,v27,1);
                const v69 = [536870912];
                const v70 = v32(10,Function,127,v69,Function);
            }
        }
    }
}
const v71 = {preventExtension:v14,get:v9,deleteProperty:v14,has:v14,defineProperty:v14,getOwnPropertyDescriptor:v9,call:v9,set:v14,ownKeys:v14,setPrototypeOf:v9,construct:v14};
const v73 = new Proxy(v8,v71);
const v74 = "undefined"[v6];
const v75 = v14(v73,v9,v14,v9,v74);
}
%NeverOptimizeFunction(main);
main();
