function main() {
const v0 = {};
function v1(v2,v3,v4,v5) {
    const v7 = [1337];
    for (const v8 of v7) {
        let v11 = gc;
        const v17 = [1337];
        for (let v21 = 0; v21 < 100; v21++) {
            let v23 = undefined;
            const v26 = [1337];
            const v27 = [v26];
            const v28 = v27.reduce(v11,gc,"symbol",Function);
        }
    }
}
const v33 = [v0];
const v34 = v1(10,Function,1337,v33,Function);
}
%NeverOptimizeFunction(main);
main();
