function main() {
const v0 = [];
const v1 = [v0];
const v2 = {};
const v4 = new BigUint64Array(v1,v2);
for (const v5 of v4) {
    for (let v8 = v5; v8 < 10; v8++) {
    }
}
}
%NeverOptimizeFunction(main);
main();
