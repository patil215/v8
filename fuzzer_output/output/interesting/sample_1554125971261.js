function main() {
const v1 = [13.37];
for (let v9 = 0; v9 < 100; v9++) {
    let v11 = undefined;
    function v20(v21,v22,v23,v24,v25) {
        const v26 = [1337];
        for (const v33 of v26) {
            delete v26[0];
        }
    }
    const v35 = v20("undefined",1337,13.37,Math);
}
}
%NeverOptimizeFunction(main);
main();
