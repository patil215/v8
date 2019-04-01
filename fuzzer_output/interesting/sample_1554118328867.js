function main() {
const v5 = [1337];
let v10 = undefined;
function v11(v12,v13,v14,v15) {
    with (v5) {
        function v16(v17,v18,v19,v20) {
        }
        const v27 = [1337];
        for (let v31 = 0; v31 != 100; v31++) {
            const v32 = v16(10,Function,1337,v27,Function);
        }
    }
}
const v38 = [1337];
const v39 = v11(10,Function,1337,v38,Function);
}
%NeverOptimizeFunction(main);
main();
