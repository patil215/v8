function main() {
const v3 = [13.37,13.37];
const v5 = v3.fill(13.37,-2147483648,RegExp,13.37,1337);
}
%NeverOptimizeFunction(main);
main();
