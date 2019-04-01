function main() {
const v1 = 4294967297 << 4294967297;
const v6 = [1337];
delete v6[255];
}
%NeverOptimizeFunction(main);
main();
