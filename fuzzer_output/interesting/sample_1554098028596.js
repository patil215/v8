function main() {
for (let v6 = 0; v6 < 5; v6++) {
    const v8 = [1337];
    const v10 = [13.37,13.37,13.37,13.37];
    v8.length = 2;
}
}
%NeverOptimizeFunction(main);
main();
