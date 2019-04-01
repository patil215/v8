function main() {
const v2 = [1337];
v2.__proto__ = Math;
let v5 = 0;
const v6 = v5 + 1;
v5 = v6;
}
%NeverOptimizeFunction(main);
main();
