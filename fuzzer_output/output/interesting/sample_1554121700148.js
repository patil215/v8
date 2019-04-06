function main() {
const v1 = [13.37,13.37,13.37,13.37];
const v3 = [1337];
v1.length = 65537;
v1[0] = v3;
}
%NeverOptimizeFunction(main);
main();
