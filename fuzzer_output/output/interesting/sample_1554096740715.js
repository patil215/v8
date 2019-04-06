function main() {
let v4 = 0;
const v5 = 0 || 9007199254740991;
const v6 = v4 + 1;
v4 = v6;
let v28 = 0;
const v29 = v28 + 1;
v28 = v29;
}
%NeverOptimizeFunction(main);
main();
