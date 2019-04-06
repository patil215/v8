function main() {
for (let v3 = 0; v3 < 100; v3++) {
    const v9 = [1337,1337];
    const v10 = [1337,v9,-1777286928];
    const v12 = new Float32Array(v10);
    for (const v13 in v12) {
    }
}
}
%NeverOptimizeFunction(main);
main();
