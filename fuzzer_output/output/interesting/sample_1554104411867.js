function main() {
const v1 = [13.37];
const v7 = [1337];
for (let v11 = 0; v11 < 100; v11++) {
    let v13 = undefined;
    const v17 = [13.37,13.37,13.37,13.37];
    Function.__proto__ = v17;
    Function.sin = 13.37;
    let v22 = "undefined";
    v1.__proto__ = Function;
    let v26 = 0;
    const v27 = v26 + 1;
    v26 = v27;
}
}
%NeverOptimizeFunction(main);
main();
