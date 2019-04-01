function main() {
const v5 = [1337];
const v6 = v5 * v5;
}
%NeverOptimizeFunction(main);
main();
