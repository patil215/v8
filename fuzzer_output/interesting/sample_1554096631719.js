function main() {
const v1 = [13.37,13.37,13.37,13.37];
v1.length = 268435456;
}
%NeverOptimizeFunction(main);
main();
