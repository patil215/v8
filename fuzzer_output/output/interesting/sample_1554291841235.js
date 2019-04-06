function main() {
const v1 = [-268435456];
const v2 = [v1];
const v3 = {};
const v5 = new BigInt64Array(v2,v3);
for (const v6 of v5) {
    const v10 = v6 >> v6;
    const v11 = v10 | v6;
}
}
%NeverOptimizeFunction(main);
main();
