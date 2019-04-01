function main() {
const v4 = [1337];
const v5 = [-2147483649,v4,WeakMap,13.37];
const v6 = {__defineGetter__:1337};
const v10 = v5 > v6;
const v13 = new Uint8Array(21485);
for (let v17 = 0; v17 < 100; v17++) {
    const v19 = [13.37,13.37];
    const v21 = [1337,1337,1337];
    const v22 = [13.37,v19,13.37,v21];
    v22.length = 65537;
}
}
%NeverOptimizeFunction(main);
main();
