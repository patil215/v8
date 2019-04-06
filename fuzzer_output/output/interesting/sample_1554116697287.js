function main() {
const v2 = new Uint32Array(BigInt64Array);
for (let v6 = 0; v6 < 100; v6++) {
    const v8 = [13.37,13.37];
    const v10 = [1337,1337,1337];
    const v11 = [13.37,v8,13.37,v10];
    v11.length = 65537;
}
}
%NeverOptimizeFunction(main);
main();
