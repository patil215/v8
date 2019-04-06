function main() {
const v4 = [127];
const v5 = [v4];
const v6 = {};
const v8 = new BigUint64Array(v5,v6);
for (const v9 of v8) {
    const v10 = v9 << v9;
    const v11 = v10[v10];
}
}
%NeverOptimizeFunction(main);
main();
