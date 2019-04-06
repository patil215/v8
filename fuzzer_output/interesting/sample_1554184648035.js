function main() {
const v2 = new BigInt64Array(1616);
for (let v6 = 0; v6 < 4; v6++) {
    const v7 = v2.includes(v6,1,v6);
}
}
%NeverOptimizeFunction(main);
main();
