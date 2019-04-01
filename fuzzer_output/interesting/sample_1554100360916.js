function main() {
for (let v3 = 0; v3 < 5; v3++) {
    const v6 = [v3,13.37,13.37,13.37];
    v6[512] = 56757;
}
}
%NeverOptimizeFunction(main);
main();
