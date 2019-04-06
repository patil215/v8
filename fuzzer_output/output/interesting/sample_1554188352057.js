function main() {
const v1 = [1337];
let v4 = "boolean";
const v7 = new BigUint64Array(1337,BigUint64Array,v4,v4,0);
for (const v8 of v7) {
    let v9 = v1;
    const v10 = v9 < v8;
}
}
%NeverOptimizeFunction(main);
main();
