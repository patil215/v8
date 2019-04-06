function main() {
const v1 = [13.37,13.37];
const v4 = Symbol.unscopables;
const v5 = v1[v4];
for (const v6 in v5) {
}
}
%NeverOptimizeFunction(main);
main();
