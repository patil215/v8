function main() {
let v3 = "undefined";
v3 = v3;
const v5 = {};
}
%NeverOptimizeFunction(main);
main();
