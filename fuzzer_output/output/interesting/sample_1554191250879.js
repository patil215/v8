function main() {
let v1 = undefined;
let v3 = 7;
function v4(v5,v6,v7,v8) {
    const v9 = v7 / v3;
    v1 = v9;
}
const v15 = [1337];
for (let v19 = 0; v19 < 100; v19++) {
    const v20 = v4(10,Function,1337,v15,Function);
}
const v22 = [-1296276224];
const v23 = [v22];
const v24 = {};
const v26 = new BigUint64Array(v23,v24);
}
%NeverOptimizeFunction(main);
main();
