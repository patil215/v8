function main() {
const v1 = [1337];
v1[256] = 1337;
}
%NeverOptimizeFunction(main);
main();
