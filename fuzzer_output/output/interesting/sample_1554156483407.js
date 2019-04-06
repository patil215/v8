function main() {
let v2 = -1.7976931348623157e+308;
const v4 = [v2];
const v5 = Math.atan2(v4,-9007199254740993);
}
%NeverOptimizeFunction(main);
main();
