function main() {
const v1 = [];
v1[2.0] = 10;
v1.length = 1;
}
%NeverOptimizeFunction(main);
main();
