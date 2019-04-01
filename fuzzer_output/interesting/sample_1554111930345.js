function main() {
const v5 = {};
for (const v6 in v5) {
    const v7 = v6 >= v6;
}
}
%NeverOptimizeFunction(main);
main();
