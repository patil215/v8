function main() {
const v1 = {};
let v2 = v1;
const v3 = String > v2;
}
%NeverOptimizeFunction(main);
main();
