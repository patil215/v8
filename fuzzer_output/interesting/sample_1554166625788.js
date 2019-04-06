function main() {
const v2 = [13.37,13.37];
const v3 = [gc,13.37,v2];
const v4 = {unicode:13.37};
v4.__proto__ = v3;
const v6 = [663039897];
const v7 = [v6];
const v8 = {};
const v10 = new BigUint64Array(v7,v8);
for (let v14 = 0; v14 < 2; v14++) {
    const v15 = v4.shift(v4,v14,BigUint64Array,v14,v14);
}
}
%NeverOptimizeFunction(main);
main();
