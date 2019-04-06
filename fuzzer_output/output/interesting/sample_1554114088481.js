function main() {
for (let v4 = 0; v4 < 5; v4++) {
    const v6 = [1337];
    for (let v10 = 0; v10 < 2; v10++) {
        v6.isNaN = 2;
    }
    v6[402632011] = 13.37;
}
}
%NeverOptimizeFunction(main);
main();
