function main() {
let v26 = 0;
const v27 = "undefined" || Function;
const v28 = v26 + 1;
v26 = v28;
}
%NeverOptimizeFunction(main);
main();
