function main() {
for (let v3 = 0; v3 < 100; v3++) {
    const v5 = Object.freeze(v3,Object);
}
}
%NeverOptimizeFunction(main);
main();
