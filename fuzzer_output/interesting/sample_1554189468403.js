function main() {
const v4 = [1337];
for (let v8 = 13.37; v8 < 127; v8++) {
    let v9 = 1337;
    for (const v10 in v4) {
    }
    let v11 = v4;
    v11[v9] = v8;
    const v12 = v4.shift(Function,10,1337,v4);
}
}
%NeverOptimizeFunction(main);
main();
