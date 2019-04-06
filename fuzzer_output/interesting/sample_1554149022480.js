function main() {
let v2 = "string";
const v3 = v2.split("string",-9007199254740991);
}
%NeverOptimizeFunction(main);
main();
