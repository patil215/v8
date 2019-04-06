function main() {
let v2 = "atan";
const v5 = new BigUint64Array(1337,BigUint64Array,v2,v2,0);
for (const v6 of v5) {
    const v7 = ~v6;
    const v8 = v7 < v6;
}
}
%NeverOptimizeFunction(main);
main();
