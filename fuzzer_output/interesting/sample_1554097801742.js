function main() {
const v1 = Symbol.unscopables;
let v4 = 0;
const v5 = v4 + 1;
v4 = v5;
delete v4[v1];
}
%NeverOptimizeFunction(main);
main();
