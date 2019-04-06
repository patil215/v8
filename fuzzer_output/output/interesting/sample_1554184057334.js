function main() {
const v1 = [256];
const v3 = [v1];
const v4 = [v3];
const v5 = {};
const v7 = new BigUint64Array(v4,v5);
for (const v8 of v7) {
    const v9 = 4294967297 >= v8;
}
}
%NeverOptimizeFunction(main);
main();
