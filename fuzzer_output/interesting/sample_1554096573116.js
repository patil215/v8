function main() {
let v1 = Set;
const v2 = v1 + 1;
}
%NeverOptimizeFunction(main);
main();
