function main() {
let v1 = "undefined";
const v4 = Symbol.iterator;
Function[v4] = Symbol;
for (const v6 in Function) {
}
let v10 = 0;
const v11 = v10 + 1;
v10 = v11;
let v14 = 0;
}
%NeverOptimizeFunction(main);
main();
