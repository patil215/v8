function main() {
const v2 = [13.37];
let v3 = "undefined";
v3 = v2;
v3[9] = 13.37;
}
%NeverOptimizeFunction(main);
main();
