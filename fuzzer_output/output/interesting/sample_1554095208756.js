function main() {
const v3 = "number" >> RegExp;
v3.length = -4096;
}
%NeverOptimizeFunction(main);
main();
