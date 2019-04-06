function main() {
for (let v3 = 0; v3 < 100; v3++) {
    let v5 = undefined;
    function v10(v11,v12,v13,v14,v15) {
        const v17 = [13.37,13.37,13.37,13.37];
        const v19 = [1337];
        const v20 = [v19];
        function v21(v22,v23,v24,v25) {
            'use strict'
            v5 = v21;
        }
        for (let v30 = 0; v30 < 100; v30++) {
            const v31 = v21(13.37,v17,13.37,1337,v20);
        }
    }
    const v32 = v10("undefined",1337,13.37,Math);
}
}
%NeverOptimizeFunction(main);
main();
