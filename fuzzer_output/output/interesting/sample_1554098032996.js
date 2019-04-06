function main() {
let v2 = 0;
const v3 = v2 + 1;
v2 = v3;
const v5 = [1337];
const v6 = [v5];
entries = 1337;
entries = Function;
}
%NeverOptimizeFunction(main);
main();
