function main() {
const v2 = [851828232];
const v3 = [v2];
const v4 = {};
const v6 = new BigUint64Array(v3,v4);
for (const v7 of v6) {
    const v8 = v7 << v7;
    const v9 = v8 * v7;
}
}
%NeverOptimizeFunction(main);
main();
