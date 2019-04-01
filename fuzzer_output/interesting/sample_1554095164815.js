function main() {
let v2 = 0;
const v3 = v2 + 1;
v2 = v3;
const v4 = [v2];
}
%NeverOptimizeFunction(main);
main();
