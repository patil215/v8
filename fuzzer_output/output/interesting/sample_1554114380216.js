function main() {
const v1 = [13.37,13.37,13.37,13.37,13.37];
function v2(v3,v4,v5,v6) {
    let v9 = 0;
    do {
        let v12 = 0;
        do {
            const v14 = 13.37 | v12;
            for (const v15 of v1) {
            }
            const v16 = v12 + 1;
            v12 = v16;
        } while (v12 < 10);
        const v17 = v9 + 1;
        v9 = v17;
        let v20 = 0;
        const v21 = v20 + 1;
        v20 = v21;
        let v24 = 0;
        const v25 = v24 + 1;
        v24 = v25;
    } while (v9 < 4);
}
const v31 = [1337];
const v32 = v2(10,Function,1337,v31,Function);
}
%NeverOptimizeFunction(main);
main();
