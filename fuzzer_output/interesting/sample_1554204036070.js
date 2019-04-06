function main() {
const v1 = [9007199254740992];
const v2 = [v1];
const v3 = {};
const v5 = new BigUint64Array(v2,v3);
const v6 = 9007199254740992 != v5;
}
%NeverOptimizeFunction(main);
main();
