function main() {
const v1 = Promise.bind;
const v2 = new Promise(v1,Promise);
}
%NeverOptimizeFunction(main);
main();
