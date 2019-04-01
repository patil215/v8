function main() {
const v1 = [1337,1337,1337,1337];
const v3 = Symbol.search;
const v4 = v1[v3];
}
%NeverOptimizeFunction(main);
main();
