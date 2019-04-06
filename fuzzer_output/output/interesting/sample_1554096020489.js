function main() {
const v2 = [-536870912];
const v3 = [v2];
Object[v3] = 1337;
}
%NeverOptimizeFunction(main);
main();
