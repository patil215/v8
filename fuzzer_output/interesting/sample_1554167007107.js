function main() {
const v3 = [13.37,13.37,13.37,13.37,13.37];
let v4 = "boolean";
const v7 = new BigUint64Array(1337,BigUint64Array,v4,v4,0);
for (const v8 of v7) {
    const v9 = v3 < v8;
    const v10 = ~v8;
}
}
%NeverOptimizeFunction(main);
main();
