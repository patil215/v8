function main() {
const v1 = [];
v1[2] = 9007199254740991;
let v4 = 0;
const v5 = v4 + 1;
v4 = v5;
}
%NeverOptimizeFunction(main);
main();
