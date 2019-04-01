function main() {
let v7 = undefined;
const v9 = new Array(v7);
}
%NeverOptimizeFunction(main);
main();
