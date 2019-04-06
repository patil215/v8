function main() {
const v0 = [];
let v3 = 0;
const v4 = v3 + 1;
v3 = v4;
const v5 = [...v0,0];
}
%NeverOptimizeFunction(main);
main();
