function main() {
const v1 = "Dp4/lUmNFk".__proto__;
const v3 = Symbol.iterator;
v1[v3] = Symbol;
}
%NeverOptimizeFunction(main);
main();
