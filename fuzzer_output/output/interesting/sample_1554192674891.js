function main() {
const v5 = [1337];
let v10 = undefined;
const v15 = [2930408582];
const v16 = [v15];
const v17 = {};
const v19 = new BigUint64Array(v16,v17);
for (const v20 of v19) {
    const v21 = v20 + v20;
    const v22 = v19 >= v21;
}
}
%NeverOptimizeFunction(main);
main();
