function main() {
const v1 = ["function"];
const v4 = Object.seal(v1,-4096);
v1.length = 0;
}
%NeverOptimizeFunction(main);
main();
