function main() {
const v1 = [851828232];
const v2 = [v1];
const v3 = {};
const v8 = new BigUint64Array(v2,v3);
for (const v9 of v8) {
    const v13 = v9 / v9;
    const v14 = v13 / v9;
}
}
%NeverOptimizeFunction(main);
main();
