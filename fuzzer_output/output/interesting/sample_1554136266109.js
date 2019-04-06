function main() {
const v2 = Array(2349795646);
let v4 = -65537;
const v5 = v4 + 1;
v2[1008111865] = v5;
}
%NeverOptimizeFunction(main);
main();
