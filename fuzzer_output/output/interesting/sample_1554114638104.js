function main() {
const v1 = [-4294967297];
const v2 = [v1];
const v3 = {};
const v5 = new BigUint64Array(v2,v3);
}
%NeverOptimizeFunction(main);
main();
