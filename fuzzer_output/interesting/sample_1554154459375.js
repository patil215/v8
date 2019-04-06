function main() {
const v2 = [-3176458122];
for (let v7 = 0; v7 != 100; v7++) {
    let v8 = v7;
    let v9 = v2;
    v9[v8] = v7;
    const v10 = v2.shift(Function,1337,-3176458122,v2);
}
}
%NeverOptimizeFunction(main);
main();
