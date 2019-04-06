function main() {
const v5 = [1337];
for (let v9 = 0; v9 < 100; v9++) {
    let v11 = undefined;
    function v17(v18,v19,v20,v21,v22) {
        let v24 = undefined;
        const v26 = [13.37,13.37,13.37,13.37];
        const v29 = [1337];
        const v30 = [v29];
        function v31(v32,v33,v34,v35) {
            'use strict'
            let v36 = Function;
            v36 = v30;
            v11 = v31;
        }
        for (let v41 = 0; v41 < 100; v41++) {
            const v42 = v31(13.37,v26,13.37,1337,v30);
        }
    }
    const v49 = v17("undefined",1337,13.37,Math);
}
}
%NeverOptimizeFunction(main);
main();
