function main() {
const v5 = [1337];
let v6 = "undefined";
const v7 = v5 + v6;
}
%NeverOptimizeFunction(main);
main();
