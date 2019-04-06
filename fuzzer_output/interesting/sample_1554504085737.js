function main() {
const v1 = [1.7976931348623157e+308];
const v2 = v1 + 1;
const v3 = v2 & v2;
}
%NeverOptimizeFunction(main);
main();
