function main() {
const v7 = [1337];
for (let v11 = 13.37; v11 < 100; v11++) {
    let v12 = 1337;
    for (const v13 in v7) {
    }
    let v14 = v7;
    v14[v12] = v11;
    const v15 = v7.shift(Function,10,1337,v7);
}
}
%NeverOptimizeFunction(main);
main();
