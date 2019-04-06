function main() {
let v5 = "undefined";
const v7 = v5.split(1337,-536870912);
}
%NeverOptimizeFunction(main);
main();
