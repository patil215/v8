function main() {
for (let v9 = 0; v9 < 5; v9++) {
    const v11 = Symbol.toStringTag;
    this[v11] = v9;
}
}
%NeverOptimizeFunction(main);
main();
