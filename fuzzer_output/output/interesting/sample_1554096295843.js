function main() {
const v5 = [1337];
const v6 = 1337 & v5;
}
%NeverOptimizeFunction(main);
main();
