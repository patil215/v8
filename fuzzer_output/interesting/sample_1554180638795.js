function main() {
const v1 = WeakSet[-2];
const v2 = [v1];
let v5 = "boolean";
const v8 = new BigUint64Array(1337,BigUint64Array,v5,v5,0);
let v11 = 0;
const v15 = v11 + 1;
v11 = v15;
for (const v16 of v8) {
    let v17 = v2;
    const v18 = v17 == v16;
}
}
%NeverOptimizeFunction(main);
main();
