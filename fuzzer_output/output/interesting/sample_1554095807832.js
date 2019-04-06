function main() {
const v1 = 10 + 10;
v1.__proto__ = v1;
}
%NeverOptimizeFunction(main);
main();
