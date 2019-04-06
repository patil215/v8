function main() {
const v4 = Promise.propertyIsEnumerable;
const v5 = new Promise(v4,Promise);
}
%NeverOptimizeFunction(main);
main();
