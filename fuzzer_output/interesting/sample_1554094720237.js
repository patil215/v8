function main() {
const v21 = [13.37];
v21[v21] = v21;
}
%NeverOptimizeFunction(main);
main();
