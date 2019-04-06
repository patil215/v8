function main() {
const v0 = {};
const v2 = [13.37,13.37,13.37,13.37,13.37];
const v4 = [13.37,v2,1337];
const v7 = [13.37,13.37,13.37,13.37];
function v10(v11,v12,v13,v14) {
    let v17 = 13.37;
    const v19 = new SharedArrayBuffer(1957963848,v17);
    const v22 = new BigInt64Array(51066);
    const v24 = [13.37,13.37,13.37,13.37,13.37];
    const v26 = [v24,1337,13.37,1337];
    const v28 = [v26];
    const v29 = {};
    const v31 = new WeakMap(v28,v29);
    Map.__proto__ = v31;
}
let v32 = v4;
const v33 = v10(2388009467,13.37,v32);
const v34 = v10(0,v7,13.37,v32,v0);
}
%NeverOptimizeFunction(main);
main();
