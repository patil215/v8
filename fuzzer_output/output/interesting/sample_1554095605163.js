function main() {
const v1 = [1337];
const v2 = [v1];
const v5 = [1337];
let v8 = 0;
do {
    const v9 = (1337)[v5];
    const v10 = v8 + 1;
    v8 = v10;
    const v12 = Symbol.toStringTag;
    v2[v12] = v9;
} while (v8 < 4);
}
%NeverOptimizeFunction(main);
main();
