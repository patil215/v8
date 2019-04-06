function main() {
const v1 = ["function"];
const v4 = Object.seal(v1,-4096);
}
%NeverOptimizeFunction(main);
main();
