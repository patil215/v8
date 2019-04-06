function main() {
const v1 = {getUint32:"Z6HVy*PuQW"};
let v4 = 13.37;
function v5(v6,v7,v8,v9) {
    const v11 = [1337];
    function v12(v13,v14,v15) {
        'use strict'
        v6.__proto__ = v13;
    }
    const v18 = Function + 1;
    for (let v22 = 0; v22 < 100; v22++) {
        const v23 = v12(v11,9,v18,9);
    }
}
const v29 = [1337];
const v30 = v5(10,Function,1337,v29,Function);
const v31 = v5(BigInt,BigInt,v30,v4);
const v32 = v5(v29,v29,v1);
}
%NeverOptimizeFunction(main);
main();
