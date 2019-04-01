function main() {
const v5 = [1337];
for (let v9 = 0; v9 <= 100; v9++) {
    let v11 = undefined;
    function v12(v13,v14,v15,v16) {
    }
    const v17 = {preventExtension:v12,setPrototypeOf:v12};
    function v23(v24,v25,v26,v27,v28) {
        const v30 = [13.37,13.37,13.37,13.37];
        const v32 = [1337];
        const v33 = [v32];
        function v34(v35,v36,v37,v38) {
            'use strict'
            v11 = v34;
        }
        for (let v43 = 0; v43 < 100; v43++) {
            const v44 = v34(13.37,v30,13.37,1337,v33);
        }
        const v46 = [13.37,13.37,13.37,Function];
    }
    for (let v50 = 0; v50 < 100; v50++) {
        const v51 = v23("undefined",1337,13.37,Math);
    }
}
}
%NeverOptimizeFunction(main);
main();
