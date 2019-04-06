function main() {
const v4 = [13.37];
const v5 = {};
const v10 = [1337];
const v11 = [v10];
function v13(v14,v15,v16,v17) {
    'use strict'
    const v19 = [13.37];
    v19[-2147483648] = v14;
    for (let v26 = 0; v26 < 100; v26++) {
        const v28 = Symbol.iterator;
        const v29 = v19[v28];
        v19[2856344206] = v17;
    }
}
const v31 = v13(10,13.37,..."symbol",...v11,9007199254740991);
const v33 = v13(13.37,"symbol",v13,v11,v31);
const v34 = v13(v4,0,BigUint64Array,-268435456,v5,"function");
}
%NeverOptimizeFunction(main);
main();
