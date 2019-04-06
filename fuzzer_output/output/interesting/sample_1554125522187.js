function main() {
const v1 = [13.37];
function v6(v7,v8,v9,v10,v11) {
    function v12(v13,v14,v15,v16) {
        let v19 = 0;
        const v23 = v19 + 1;
        v19 = v23;
        let v26 = 0;
        do {
            const v27 = v26 + 1;
            v26 = v27;
        } while (v26 < 6);
    }
    const v33 = [1337];
    const v36 = [13.37,13.37];
    function v42(v43,v44,v45,v46,v47) {
        Math[v44] = v43;
        for (let v51 = 0; v51 < 100; v51++) {
        }
    }
    function v52(v53,v54,v55,v56,v57) {
        const v58 = v42(v54,v56,9007199254740991,9007199254740991);
    }
    for (let v62 = 0; v62 < 100; v62++) {
        const v63 = v52("undefined",1337,13.37,Math);
    }
    const v64 = v52(v36,-3527358298,v42,Math);
    const v66 = [1337,1337];
    const v67 = v12(10,Function,1337,v33,Function);
}
for (let v71 = 0; v71 < 100; v71++) {
    const v72 = v6("undefined",1337,13.37,Number);
}
}
%NeverOptimizeFunction(main);
main();
