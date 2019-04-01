function main() {
const v3 = Math[0];
const v4 = v3 || Math;
}
%NeverOptimizeFunction(main);
main();
