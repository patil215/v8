function main() {
const v4 = [13.37,13.37,13.37,13.37];
v4[v4] = Function;
}
%NeverOptimizeFunction(main);
main();
