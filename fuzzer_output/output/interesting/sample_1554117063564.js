function main() {
let v1 = "undefined";
const v3 = {};
Function.__proto__ = v3;
let v7 = 0;
v7 = 10;
for (const v9 in Function) {
}
let v12 = 0;
}
%NeverOptimizeFunction(main);
main();
