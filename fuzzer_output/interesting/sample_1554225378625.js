function main() {
let v2 = 0;
const v6 = v2 + 1;
v2 = v6;
const v8 = [1337];
const v9 = [v8];
const v10 = {};
const v12 = new BigUint64Array(v9,v10);
for (const v13 of v12) {
    const v14 = v13 << v13;
    const v15 = v14 < 100;
}
}
%NeverOptimizeFunction(main);
main();
