function main() {
const v2 = [13.37,13.37,13.37,13.37];
const v3 = v2 % 13.37;
const v4 = Atomics[v3];
}
%NeverOptimizeFunction(main);
main();
