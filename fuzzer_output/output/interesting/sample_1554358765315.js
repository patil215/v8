function main() {
const v2 = [-1];
const v3 = [v2];
const v5 = new BigInt64Array(v3,-4123999023);
for (const v6 of v5) {
    const v7 = v6 / v6;
}
}
%NeverOptimizeFunction(main);
main();
