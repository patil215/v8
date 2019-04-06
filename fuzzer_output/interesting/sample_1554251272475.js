function main() {
const v1 = Promise.__lookupGetter__;
const v2 = new Promise(v1,Promise);
}
%NeverOptimizeFunction(main);
main();
