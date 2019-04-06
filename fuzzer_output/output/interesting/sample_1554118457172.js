function main() {
const v5 = [1337];
for (let v9 = 0; v9 < 100; v9++) {
    let v11 = undefined;
    const v13 = [13.37,13.37,13.37,13.37];
    let v15 = "undefined";
    function v24(v25,v26,v27,v28,v29) {
        let v31 = undefined;
        for (let v35 = 0; v35 < 100; v35++) {
            for (const v36 in v35) {
                v31 = v35;
            }
            function v37(v38,v39,v40,v41,v42) {
            }
            if (v31) {
            } else {
            }
            const v44 = 0 != v37;
        }
    }
    const v45 = v24("undefined",1337,13.37,Math);
    let v48 = 0;
    const v49 = v48 + 1;
    v48 = v49;
    let v52 = 0;
    const v53 = v52 + 1;
    v52 = v53;
    let v56 = 0;
    const v57 = v56 + 1;
    v56 = v57;
}
}
%NeverOptimizeFunction(main);
main();
