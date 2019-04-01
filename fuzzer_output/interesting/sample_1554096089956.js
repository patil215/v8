function main() {
for (let v3 = 0; v3 < 5; v3++) {
    const v5 = Symbol.iterator;
    v3[v5] = 0;
}
let v7 = "undefined";
}
%NeverOptimizeFunction(main);
main();
