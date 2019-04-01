function main() {
function v0(v1,v2,v3,v4) {
    function v6(v7,v8,v9,v10) {
        const v12 = [1337];
        function v13(v14,v15,v16) {
            'use strict'
            const v17 = Function[-292286940];
            return v12;
        }
        const v20 = Function + 1;
        const v21 = v13(v12,9,v20,9);
    }
    const v27 = [1337];
    const v31 = v6(10,Function,1337,v27,Function);
    let v37 = 0;
    const v38 = v37 + 1;
    v37 = v38;
}
const v44 = [1337];
for (let v48 = 0; v48 < 100; v48++) {
    const v49 = v0(10,Function,1337,v44,Function);
}
}
%NeverOptimizeFunction(main);
main();
