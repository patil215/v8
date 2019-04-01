function main() {
for (let v3 = 0; v3 < 100; v3++) {
    let v6 = 13.37;
    const v10 = [1337];
    v6 = v10;
    v6[100] = 0;
    for (const v15 in v6) {
    }
}
}
%NeverOptimizeFunction(main);
main();
