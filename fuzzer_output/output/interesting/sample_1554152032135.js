function main() {
const v1 = [1337];
const v2 = [v1];
function v3(v4,v5,v6,v7) {
    const v10 = [13.37,13.37,13.37,13.37];
    const v11 = {getFloat64:9007199254740991};
    for (const v12 of v10) {
        with (v10) {
            for (let v16 = 0; v16 < 100; v16++) {
                const v17 = [v2,1,v12];
            }
            const v18 = -Infinity;
            const v20 = [1337,1337];
            let v21 = v18;
            const v23 = [];
            const v24 = v21.toExponential(v18,v23,1337,v23,v20);
        }
        let v27 = 0;
        const v28 = v27 + 1;
        v27 = v28;
    }
}
const v34 = [1337];
const v35 = v3(10,Function,1337,v34,Function);
}
%NeverOptimizeFunction(main);
main();
