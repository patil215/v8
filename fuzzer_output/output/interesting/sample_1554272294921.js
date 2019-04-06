function main() {
const v1 = [-268435456];
const v5 = [v1];
const v6 = {};
const v8 = new BigInt64Array(v5,v6);
for (const v9 of v8) {
    const v10 = v9 / v9;
    const v11 = v10 + v9;
}
}
%NeverOptimizeFunction(main);
main();
