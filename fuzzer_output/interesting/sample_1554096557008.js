function main() {
const v2 = [13.37,13.37,13.37,13.37];
Function.__proto__ = v2;
Function.isInteger = 13.37;
for (const v6 in Function) {
}
}
%NeverOptimizeFunction(main);
main();
