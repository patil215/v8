function main() {
const v6 = [0];
const v7 = [v6];
const v8 = {};
const v10 = new BigUint64Array(v7,v8);
for (const v11 of v10) {
    const v12 = v11 & v11;
}
}
%NeverOptimizeFunction(main);
main();
