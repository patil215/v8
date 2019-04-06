function main() {
const v1 = [1337];
const v5 = Symbol.match;
Symbol[v5] = v1;
Symbol.__proto__ = Object;
}
%NeverOptimizeFunction(main);
main();
