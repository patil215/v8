function main() {
let v5 = undefined;
let v11 = 0;
do {
    const v19 = [1337];
    let v21 = undefined;
    const v24 = 13.37 / 1337;
    const v25 = [v24,13.37,13.37,13.37];
    v11 = v25;
} while (v11 < 1);
}
%NeverOptimizeFunction(main);
main();
