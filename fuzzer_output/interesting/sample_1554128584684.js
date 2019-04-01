function main() {
let v4 = "undefined";
const v5 = v4.length;
let v12 = 0;
}
%NeverOptimizeFunction(main);
main();
