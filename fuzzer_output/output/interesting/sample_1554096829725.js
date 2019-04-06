function main() {
const v1 = [13.37,13.37,13.37,13.37];
v1[268435456] = v1;
v1.findIndex = 1337;
const v5 = WeakMap > 13.37;
}
%NeverOptimizeFunction(main);
main();
