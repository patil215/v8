function main() {
let v3 = "undefined";
const v4 = [13.37,13.37,13.37];
const v6 = [1337];
const v7 = Math.sin(v6,v4);
}
%NeverOptimizeFunction(main);
main();
