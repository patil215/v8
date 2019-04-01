function main() {
let v5 = "undefined";
let v13 = 0;
const v14 = v5 >> 1337;
const v15 = v13 + 1;
v13 = v15;
}
%NeverOptimizeFunction(main);
main();
