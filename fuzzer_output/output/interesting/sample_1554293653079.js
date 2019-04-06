function main() {
const v1 = [65536];
const v2 = [v1];
const v3 = {};
const v5 = new BigUint64Array(v2,v3);
const v7 = [1337,1337,1337,1337,1337];
const v9 = new Int16Array(v7);
for (let v14 = 0; v14 < 9; v14++) {
    const v15 = v9.indexOf(-4096,v14,Int16Array,v7);
}
}
%NeverOptimizeFunction(main);
main();
