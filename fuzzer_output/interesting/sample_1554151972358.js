function main() {
const v3 = [1.7976931348623157e+308];
const v4 = Math.log1p(v3,-731457757);
}
%NeverOptimizeFunction(main);
main();
