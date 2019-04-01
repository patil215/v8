function main() {
const v2 = [1337];
const v3 = [v2];
const v9 = Error();
let v11 = "undefined";
}
%NeverOptimizeFunction(main);
main();
