function main() {
const v1 = [13.37,13.37,13.37,13.37,13.37];
const v3 = [13.37,13.37,13.37,13.37,13.37];
v1.__proto__ = v3;
}
%NeverOptimizeFunction(main);
main();
