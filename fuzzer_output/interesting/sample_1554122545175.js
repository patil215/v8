function main() {
for (let v3 = 0; v3 < 100; v3++) {
    const v5 = Object.freeze(Object,Object);
}
}
%NeverOptimizeFunction(main);
main();
