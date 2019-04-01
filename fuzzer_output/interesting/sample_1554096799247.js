function main() {
let v2 = 0;
do {
    const v5 = [1337];
    const v6 = [v5];
    for (const v7 in v6) {
    }
    const v10 = v2 + 1;
    v2 = v10;
} while (v2 < 2);
}
%NeverOptimizeFunction(main);
main();
