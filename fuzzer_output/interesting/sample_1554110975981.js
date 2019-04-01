function main() {
function v1(v2,v3,v4,v5) {
    const v8 = [1337];
    function v9(v10,v11,v12) {
        'use strict'
        v2.__proto__ = v10;
        let v16 = 0;
        while (v16 < 4) {
            const v17 = v16 + 1;
            v16 = v17;
        }
        const v19 = [1337];
        v19[2] = "undefined";
    }
    const v22 = Function + 1;
    for (let v26 = 0; v26 < 100; v26++) {
        const v27 = v9(v8,9,v22,9);
    }
}
const v33 = [1337];
const v34 = v1(10,Function,1337,v33,Function);
}
%NeverOptimizeFunction(main);
main();
