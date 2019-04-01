function main() {
const v1 = [13.37];
function v2(v3,v4,v5,v6) {
    function v7(v8,v9,v10,v11) {
        function v12(v13,v14,v15,v16) {
            const v18 = [1337];
            const v19 = [v18];
            const v21 = [1337];
            const v22 = {exec:v21};
            let v25 = 0;
            do {
                const v26 = v25 + 1;
                v22.trim = v19;
                v25 = v26;
            } while (v25 < 5);
        }
        const v32 = [1337];
        for (let v36 = 0; v36 < 100; v36++) {
            const v37 = v12(10,Function,1337,v32,Function);
        }
    }
    const v43 = [1337];
    for (let v47 = 0; v47 < 100; v47++) {
        const v48 = v7(10,Function,1337,v43,Function);
    }
}
const v54 = [1337];
const v58 = v2(10,Function,1337,v54,Function);
}
%NeverOptimizeFunction(main);
main();
