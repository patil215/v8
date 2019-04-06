function main() {
const v4 = [1337];
let v6 = undefined;
const v8 = [13.37,10,13.37,13.37];
for (const v9 of v8) {
    for (let v12 = 0; v12 < 10; v12++) {
        const v14 = [13.37,13.37,13.37,13.37,13.37];
        function v15(v16,v17,v18,v19) {
            function v20(v21,v22) {
            }
            const v24 = [1337,1337,1337,1337,1337];
            function v25(v26,v27,v28,v29) {
                for (let v33 = 0; v33 < 100; v33++) {
                    for (let v37 = 0; v37 < 100; v37++) {
                        let v40 = 0;
                    }
                }
            }
            const v45 = [v24];
            const v46 = v25(10,Function,1337,v45,arguments);
            const v48 = v20(...arguments);
        }
        const v57 = [536870912];
        const v58 = v15(10,Function,127,v57,Function);
    }
}
}
%NeverOptimizeFunction(main);
main();
