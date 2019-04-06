function main() {
const v7 = [256];
const v8 = [v7];
const v9 = {};
const v11 = new BigUint64Array(v8,v9);
for (const v12 of v11) {
    const v13 = v12 << v12;
}
}
%NeverOptimizeFunction(main);
main();
