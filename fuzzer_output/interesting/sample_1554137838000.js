function main() {
const v3 = [Atomics,1337,46499254,1337];
for (let v7 = 0; v7 < 100; v7++) {
    const v9 = [13.37,13.37,13.37,13.37];
    v9[1] = 100;
    const v13 = new Uint8Array(v9);
    for (let v15 = 0; v15 < 5; v15++) {
        v9[10] = v15;
    }
}
}
%NeverOptimizeFunction(main);
main();
