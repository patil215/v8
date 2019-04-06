function main() {
let v1 = 0;
const v2 = v1 - 1;
const v5 = Math.pow(v2,-9007199254740993);
}
%NeverOptimizeFunction(main);
main();
