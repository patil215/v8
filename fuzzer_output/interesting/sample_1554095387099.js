function main() {
for (const v4 in Function) {
    const v5 = v4 < Function;
}
}
%NeverOptimizeFunction(main);
main();
