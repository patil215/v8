function main() {
for (let v4 = 0; v4 < 5; v4++) {
    const v7 = [13.37,13.37,13.37,13.37];
    v7[512] = 56757;
}
}
%NeverOptimizeFunction(main);
main();
