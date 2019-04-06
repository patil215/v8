function main() {
const v1 = [1.7976931348623157e+308];
const v3 = new Int32Array(v1);
}
%NeverOptimizeFunction(main);
main();
