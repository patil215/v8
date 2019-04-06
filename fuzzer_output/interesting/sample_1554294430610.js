function main() {
const v1 = [-268435456];
const v2 = [v1];
const v3 = {};
let v6 = 0;
const v7 = v6 + 1;
v6 = v7;
const v9 = new BigInt64Array(v2,v3);
for (const v10 of v9) {
    const v11 = v10 - v10;
    const v12 = v11 - v10;
    const v13 = v10 & v12;
}
}
%NeverOptimizeFunction(main);
main();
