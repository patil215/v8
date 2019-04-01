function main() {
const v1 = [13.37,13.37,13.37,13.37];
const v3 = [1337];
v1[1337] = v3;
}
%NeverOptimizeFunction(main);
main();
