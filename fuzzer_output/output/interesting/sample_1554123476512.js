function main() {
const v1 = [13.37,13.37,13.37,13.37,13.37];
const v3 = [1337];
let v5 = "undefined";
let v9 = 0;
v1.length = v3;
}
%NeverOptimizeFunction(main);
main();
