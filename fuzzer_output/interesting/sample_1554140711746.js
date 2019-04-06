function main() {
for (let v3 = 0; v3 < 100; v3++) {
    const v5 = [1337,1337,1337];
    v5.length = 1;
    v5[2] = 1;
}
}
%NeverOptimizeFunction(main);
main();
