function main() {
const v7 = [13.37,13.37];
function v9(v10,v11,v12,v13) {
    const v15 = [13.37,13.37,13.37,13.37];
    for (const v16 of v7) {
        const v17 = 13.37 >> v12;
        for (let v21 = 0; v21 < 100; v21++) {
            let v23 = undefined;
            function v27(v28,v29,v30,v31,v32) {
                const v34 = [13.37,13.37,13.37,13.37];
                const v37 = [1337];
                const v38 = [v37];
                function v39(v40,v41,v42,v43) {
                    'use strict'
                    let v44 = Function;
                    v44 = v38;
                }
                const v49 = v39(13.37,v34,13.37,1337,v38);
            }
            const v53 = v27(1337,Math,9007199254740991,9007199254740991);
        }
    }
    for (let v57 = 0; v57 < 5; v57++) {
        v15[10] = v57;
    }
}
const v66 = [1337];
for (let v70 = 0; v70 < 100; v70++) {
    const v71 = v9(10,Function,4294967297,v66,Function);
}
}
%NeverOptimizeFunction(main);
main();
