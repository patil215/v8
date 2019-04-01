function main() {
function v6(v7,v8,v9,v10) {
    const v20 = [1337];
    function v21(v22,v23,v24) {
        'use strict'
        const v27 = [1337];
        v27[2] = "undefined";
    }
    const v30 = Function + 1;
    for (let v34 = 0; v34 < 100; v34++) {
        const v35 = v21(v20,9,v30,9);
    }
}
const v42 = [1337];
const v46 = v6(10,Function,1337,v42,Function);
}
%NeverOptimizeFunction(main);
main();
