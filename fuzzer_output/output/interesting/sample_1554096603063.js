function main() {
let v28 = "undefined";
const v36 = v28 >> 6;
}
%NeverOptimizeFunction(main);
main();
