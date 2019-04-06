function main() {
const v1 = [-268435456];
const v2 = [v1];
const v3 = {};
const v5 = new BigInt64Array(v2,v3);
for (const v6 of v5) {
    const v7 = v6 >> v6;
    const v8 = v7 - v6;
    const v9 = v6 & v8;
}
}
%NeverOptimizeFunction(main);
main();
