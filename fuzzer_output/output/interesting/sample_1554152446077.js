function main() {
const v2 = [1337];
for (let v7 = 0; v7 < 100; v7++) {
    let v9 = 1;
    let v10 = v2;
    v10[v9] = v7;
    const v11 = v2.shift(Function,1337,1337,v2);
}
}
%NeverOptimizeFunction(main);
main();
