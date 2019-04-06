function main() {
let v29 = 0;
const v30 = 10 | 0;
const v31 = v29 + 1;
v29 = v31;
}
%NeverOptimizeFunction(main);
main();
