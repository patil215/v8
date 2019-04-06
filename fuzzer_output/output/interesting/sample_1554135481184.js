function main() {
const v3 = [1337];
let v4 = Array;
const v9 = Symbol.species;
v4[v9] = 1337;
let v15 = 0;
Function.__proto__ = v3;
const v16 = v15 + 1;
v15 = v16;
}
%NeverOptimizeFunction(main);
main();
