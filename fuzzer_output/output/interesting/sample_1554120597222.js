function main() {
let v2 = "undefined";
const v4 = v2.split(1,1337);
}
%NeverOptimizeFunction(main);
main();
