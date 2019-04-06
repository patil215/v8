function main() {
const v4 = [1337];
for (let v8 = 13.37; v8 < 100; v8++) {
    let v9 = 1337;
    let v10 = v4;
    v10[v9] = v8;
    const v11 = v4.shift(Function,10,1337,v4);
}
}
%NeverOptimizeFunction(main);
main();
