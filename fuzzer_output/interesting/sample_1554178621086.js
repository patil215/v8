function main() {
const v4 = [1];
const v5 = [v4];
const v7 = new BigUint64Array(v5,"undefined");
for (const v8 of v7) {
    const v9 = v8 / v8;
}
}
%NeverOptimizeFunction(main);
main();
