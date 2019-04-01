function main() {
Function.__proto__ = null;
let v3 = "undefined";
const v12 = [1337];
let v17 = undefined;
const v19 = Symbol.iterator;
Function[10] = v19;
}
%NeverOptimizeFunction(main);
main();
