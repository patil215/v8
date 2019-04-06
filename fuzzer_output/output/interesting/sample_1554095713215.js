function main() {
let v1 = 10;
const v2 = [v1];
}
%NeverOptimizeFunction(main);
main();
