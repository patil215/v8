function main() {
let v10 = "undefined";
const v18 = v10 >> 6;
}
%NeverOptimizeFunction(main);
main();
