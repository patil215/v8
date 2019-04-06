function main() {
let v2 = 13.37;
const v4 = [v2];
const v5 = Math.atan2(v4,-9007199254740993);
}
%NeverOptimizeFunction(main);
main();
