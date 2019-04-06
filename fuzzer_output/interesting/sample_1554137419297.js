function main() {
function v0(v1,v2,v3,v4) {
    for (let v9 = 0; v9 < 100; v9++) {
        const v10 = {};
        const v12 = [1337];
        function v13(v14,v15,v16,v17,v18) {
            const v19 = v14 / v14;
            v19.constructor = 1337;
        }
        const v22 = v13(1073741824,0,v12,v10);
    }
}
const v31 = [1337];
const v32 = v0(-268435456,Function,1337,v31,Function);
}
%NeverOptimizeFunction(main);
main();
