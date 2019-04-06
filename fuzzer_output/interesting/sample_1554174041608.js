function main() {
const v3 = [1337];
for (let v7 = 13.37; v7 < 100; v7++) {
    for (const v8 in v3) {
    }
    let v9 = v3;
    v9[v7] = v7;
    const v10 = v3.shift(Function,10,1337,v3);
}
}
%NeverOptimizeFunction(main);
main();
