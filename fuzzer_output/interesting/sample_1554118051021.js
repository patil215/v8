function main() {
const v7 = [1337];
let v12 = undefined;
let v15 = "undefined";
let v17 = "undefined";
Function.__proto__ = Boolean;
for (const v19 in Function) {
}
let v22 = 0;
const v23 = v22 + 1;
v22 = v23;
}
%NeverOptimizeFunction(main);
main();
