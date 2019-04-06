function main() {
const v1 = Promise.toString;
const v2 = new Promise(v1,Promise);
}
%NeverOptimizeFunction(main);
main();
