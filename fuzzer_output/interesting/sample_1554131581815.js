function main() {
const v5 = [1000];
for (let v9 = 0; v9 < 100; v9++) {
    let v11 = undefined;
    const v13 = [1337];
    const v17 = [13.37,13.37];
    const v18 = ["number",RegExp,v17];
    const v20 = [1337,1337,1337];
    const v22 = [13.37];
    let v25 = undefined;
    v20.length = 1;
    v20[2] = v22;
}
}
%NeverOptimizeFunction(main);
main();
