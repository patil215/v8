function main() {
const v1 = [9];
const v2 = [v1];
const v3 = {};
const v5 = new BigUint64Array(v2,v3);
for (const v6 of v5) {
    const v7 = v6 << v6;
}
}
%NeverOptimizeFunction(main);
main();
