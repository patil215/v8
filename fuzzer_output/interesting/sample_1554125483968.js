function main() {
let v2 = Promise;
for (let v7 = 0; v7 < 100; v7++) {
}
const v9 = Symbol.species;
v2[v9] = 1337;
}
%NeverOptimizeFunction(main);
main();
