function main() {
const v2 = new BigUint64Array(2879);
for (const v3 in v2) {
    v2[1] = v3;
}
}
%NeverOptimizeFunction(main);
main();
