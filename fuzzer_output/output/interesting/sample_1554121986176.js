function main() {
const v2 = [1337];
const v5 = [-4294967297];
const v6 = [v5];
const v7 = {};
const v9 = new BigUint64Array(v6,v7);
for (const v10 of v9) {
}
}
%NeverOptimizeFunction(main);
main();
