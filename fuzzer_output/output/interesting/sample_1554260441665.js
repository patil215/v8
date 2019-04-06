function main() {
let v2 = 0;
let v5 = 0;
const v7 = [-268435456];
const v8 = [v7];
const v9 = {};
const v11 = new BigInt64Array(v8,v9);
for (const v12 of v11) {
    const v13 = v12 - v12;
    const v14 = v13 | v12;
}
}
%NeverOptimizeFunction(main);
main();
