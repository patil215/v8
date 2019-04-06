function main() {
const v2 = [13.37,13.37,13.37];
const v5 = [1337];
for (let v16 = 0; v16 != 100; v16++) {
    let v17 = v5;
    v17[100] = v16;
    const v19 = [13.37,13.37,13.37,13.37];
    v17.__proto__ = v2;
    const v24 = gc(v19);
    const v25 = v5.shift(Function,1337,-3176458122,v5);
}
}
%NeverOptimizeFunction(main);
main();
