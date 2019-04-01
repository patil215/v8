function main() {
for (let v3 = 0; v3 < 5; v3++) {
    const v6 = [Function];
    const v8 = Symbol.unscopables;
    v6[v8] = 13.37;
}
}
%NeverOptimizeFunction(main);
main();
