function main() {
const v1 = [1337];
const v3 = [v1];
const v4 = [v3];
const v5 = {};
const v7 = new BigUint64Array(v4,v5);
for (const v8 of v7) {
    const v9 = 1 >= v8;
    let v12 = 0;
    let v15 = 0;
    const v16 = v15 + 1;
    v15 = v16;
}
}
%NeverOptimizeFunction(main);
main();
