function main() {
const v6 = [1337,1337,1337];
const v7 = ["undefined",v6,1337,WeakMap];
const v10 = [v7];
for (let v15 = 0; v15 < 100; v15++) {
    let v17 = 1;
    let v18 = v10;
    v18[v17] = v15;
    const v19 = v10.shift(Function,1337,1337,v10);
}
}
%NeverOptimizeFunction(main);
main();
