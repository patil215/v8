function main() {
function v1(v2,v3,v4,v5) {
    for (let v9 = 0; v9 < 100; v9++) {
        const v10 = v9 > v9;
        with (Function) {
            const v13 = [13.37,13.37,13.37,13.37,13.37];
            for (let v18 = 0; v18 < 4; v18++) {
                const v19 = v13.forEach(Object,v18,Function);
            }
        }
    }
}
const v25 = [1337];
const v26 = v1(10,Function,1337,v25,Function);
}
%NeverOptimizeFunction(main);
main();
