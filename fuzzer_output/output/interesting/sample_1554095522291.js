function main() {
const v10 = ["undefined"];
const v11 = [v10];
for (let v22 = 0; v22 < 6; v22++) {
    const v23 = v11 | v22;
}
}
%NeverOptimizeFunction(main);
main();
