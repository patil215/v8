function main() {
const v1 = 9007199254740991 != 9007199254740991;
let v2 = 9007199254740991;
let v3 = v2;
v2 = v3;
const v4 = [];
let v12 = 0;
const v13 = v12 + 1;
v12 = v13;
}
%NeverOptimizeFunction(main);
main();
