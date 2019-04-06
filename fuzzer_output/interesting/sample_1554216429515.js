function main() {
const v1 = [65536];
const v2 = [v1];
const v3 = {};
const v5 = [127];
const v6 = [v5];
const v7 = {};
let v11 = 0;
const v12 = v11 + 1;
v11 = v12;
const v13 = new BigUint64Array(v6,v7);
const v15 = new BigUint64Array(v2,v3);
for (const v16 of v15) {
    const v17 = v16 << v16;
    const v18 = v16[v17];
}
}
%NeverOptimizeFunction(main);
main();
