function main() {
let v2 = 0;
while (v2 < 3) {
    const v4 = Symbol.toStringTag;
    Symbol[v4] = v4;
    const v5 = v2 + 1;
    v2 = v5;
}
}
%NeverOptimizeFunction(main);
main();
