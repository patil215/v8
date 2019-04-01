function main() {
const v18 = "undefined" <= 10;
const v44 = [13.37,13.37,13.37,13.37];
const v114 = [1337];
const v126 = ["undefined"];
const v127 = {exec:v126};
Function.__proto__ = v44;
Symbol.getFloat32 = v127;
}
%NeverOptimizeFunction(main);
main();
