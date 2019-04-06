function main() {
const v5 = [1337];
for (let v9 = 0; v9 < 100; v9++) {
    let v11 = undefined;
    for (let v15 = 0; v15 < 5; v15++) {
        const v17 = [1337];
        const v18 = {exec:v17};
        const v21 = "undefined" != 1337;
        v17.__proto__ = v18;
    }
    let v29 = "undefined";
    let v36 = 0;
    const v37 = v36 + 1;
    v36 = v37;
}
}
%NeverOptimizeFunction(main);
main();
