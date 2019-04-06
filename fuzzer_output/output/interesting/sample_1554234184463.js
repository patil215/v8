function main() {
const v2 = [-1024];
const v3 = [v2];
const v4 = [v3];
const v5 = {};
const v7 = new BigUint64Array(v4,v5);
const v8 = v7 != 13.37;
}
%NeverOptimizeFunction(main);
main();
