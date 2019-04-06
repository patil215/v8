function main() {
const v1 = Promise.__defineSetter__;
const v2 = new Promise(v1,Promise);
}
%NeverOptimizeFunction(main);
main();
