function main() {
const v2 = [1337];
const v3 = (1337)[v2];
}
%NeverOptimizeFunction(main);
main();
