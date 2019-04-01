function main() {
for (let v3 = 0; v3 < 100; v3++) {
    const v6 = [1337,1337,1337,1337];
    const v7 = Object.freeze(v6,Object);
}
}
%NeverOptimizeFunction(main);
main();
