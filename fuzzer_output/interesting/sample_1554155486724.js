function main() {
const v2 = [1024];
const v3 = [v2];
const v5 = new BigUint64Array(v3,"undefined");
for (const v6 of v5) {
    const v7 = v6 / v6;
}
}
%NeverOptimizeFunction(main);
main();
