function main() {
const v1 = {};
const v3 = new Number(Function,v1);
v3[0] = Number;
const v5 = [13.37];
}
%NeverOptimizeFunction(main);
main();
