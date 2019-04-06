function main() {
let v1 = 0.0;
const v3 = [320623916];
const v4 = [v3];
const v5 = {};
const v7 = new BigUint64Array(v4,v5);
for (const v8 of v7) {
    const v9 = v8 << v8;
    const v10 = v9 % v9;
}
}
%NeverOptimizeFunction(main);
main();
