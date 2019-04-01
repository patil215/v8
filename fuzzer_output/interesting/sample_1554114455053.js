function main() {
const v7 = [1337];
const v24 = v7 * null;
}
%NeverOptimizeFunction(main);
main();
