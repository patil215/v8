function main() {
let v3 = 0;
const v4 = v3 + 1;
v3 = v4;
const v7 = [1337];
for (let v12 = 0; v12 < 100; v12++) {
    let v16 = 1337;
    let v17 = v7;
    v17[v16] = v12;
    const v18 = v7.shift(Function,10,1337,v7);
}
}
%NeverOptimizeFunction(main);
main();
