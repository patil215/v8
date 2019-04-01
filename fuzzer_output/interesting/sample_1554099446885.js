function main() {
const v1 = [13.37];
const v3 = [13.37,13.37,13.37,13.37];
v3.__proto__ = v1;
const v6 = [13.37,13.37,13.37,13.37];
const v7 = v6.sin;
let v9 = "undefined";
v3[2] = v7;
}
%NeverOptimizeFunction(main);
main();
