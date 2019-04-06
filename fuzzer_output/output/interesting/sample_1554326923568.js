function main() {
const v1 = "boolean" + "boolean";
const v2 = v1 * v1;
}
%NeverOptimizeFunction(main);
main();
