function main() {
const v1 = [13.37,13.37];
const v2 = [v1];
v2.length = 1;
}
%NeverOptimizeFunction(main);
main();
