function main() {
const v4 = [663039897];
const v5 = [v4];
const v6 = {};
const v8 = new BigUint64Array(v5,v6);
for (const v9 of v8) {
    const v10 = ~v9;
}
}
%NeverOptimizeFunction(main);
main();
