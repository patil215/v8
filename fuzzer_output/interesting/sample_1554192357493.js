function main() {
const v1 = [851828232];
const v2 = [v1];
const v3 = {};
const v5 = new BigUint64Array(v2,v3);
for (const v6 of v5) {
    const v7 = [v6];
    const v8 = {};
    const v10 = new BigUint64Array(v7,v8);
}
}
%NeverOptimizeFunction(main);
main();
