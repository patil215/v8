function main() {
const v1 = ["undefined"];
const v2 = {exec:v1};
Function.__proto__ = v2;
const v5 = Function.trim;
}
%NeverOptimizeFunction(main);
main();
