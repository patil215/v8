function main() {
const v2 = [13.37,13.37,13.37,13.37];
Function.__proto__ = v2;
Function.sin = 13.37;
const v6 = [13.37,13.37,13.37,13.37];
let v8 = "undefined";
let v12 = 0;
v12 = 10;
for (const v14 in Function) {
}
}
%NeverOptimizeFunction(main);
main();
