function main() {
let v4 = 9007199254740991;
const v5 = v4 + 1;
v4 = v5;
const v6 = v4 / v5;
}
%NeverOptimizeFunction(main);
main();
