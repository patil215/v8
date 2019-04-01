function main() {
const v5 = [1337];
with (v5) {
    const v15 = typeof reject;
    const v17 = v15 === "number";
}
}
%NeverOptimizeFunction(main);
main();
