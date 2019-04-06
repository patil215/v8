function main() {
let v1 = 13.37;
const v4 = [v1];
for (let v9 = 0; v9 < 100; v9++) {
    let v11 = 1;
    let v12 = v4;
    v12[v11] = v9;
    const v13 = v4.shift(Function,1337,1337,v4);
}
}
%NeverOptimizeFunction(main);
main();
