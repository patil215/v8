function main() {
for (let v4 = 0; v4 < 5; v4++) {
    const v6 = [1337];
    v6[402632011] = 13.37;
}
}
%NeverOptimizeFunction(main);
main();
