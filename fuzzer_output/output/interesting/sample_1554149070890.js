function main() {
const v1 = [1337,1337,1337];
function v2(v3,v4,v5,v6) {
    for (let v10 = 0; v10 < 100; v10++) {
        const v11 = 1 - v10;
        const v12 = [v11];
        let v13 = v12;
        const v18 = [1337,1337,1337];
        const v19 = [v18,13.37,"number",Set];
        for (const v20 of v19) {
            v20[v13] = v20;
        }
    }
}
const v26 = [v1];
const v27 = v2(10,Function,1337,v26,Function);
}
%NeverOptimizeFunction(main);
main();
