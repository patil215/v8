function main() {
const v1 = [-1296276224];
const v2 = [v1];
const v3 = {};
const v5 = new BigUint64Array(v2,v3);
const v6 = v5[v5];
}
%NeverOptimizeFunction(main);
main();
