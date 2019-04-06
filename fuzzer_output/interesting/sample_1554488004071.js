function main() {
const v2 = [-9007199254740993];
const v6 = [v2];
const v7 = {};
const v9 = new BigInt64Array(v6,v7);
for (const v10 of v9) {
    const v11 = v10 * v10;
    const v12 = v11 + v10;
    const v13 = (13.37)[v12];
}
}
%NeverOptimizeFunction(main);
main();
