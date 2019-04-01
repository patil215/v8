function main() {
const v2 = [1337];
let v5 = 0;
do {
    const v6 = (1337)[v2];
    const v7 = v5 + 1;
    v5 = v7;
} while (v5 < 4);
}
%NeverOptimizeFunction(main);
main();
