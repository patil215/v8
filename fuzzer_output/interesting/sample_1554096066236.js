function main() {
const v3 = Symbol.iterator;
Function[v3] = Symbol;
const v4 = [v3,13.37,Symbol];
let v7 = 0;
const v8 = v7 + 1;
v7 = v8;
}
%NeverOptimizeFunction(main);
main();
