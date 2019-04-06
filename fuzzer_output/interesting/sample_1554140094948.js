function main() {
for (let v6 = 0; v6 < 100; v6++) {
    const v8 = [1337,1337,1337];
    v8.length = 1;
    v8[2] = 13.37;
}
}
%NeverOptimizeFunction(main);
main();
