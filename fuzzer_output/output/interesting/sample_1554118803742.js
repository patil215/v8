function main() {
let v18 = 0;
const v23 = v18 + 1;
v18 = v23;
const v31 = !null;
}
%NeverOptimizeFunction(main);
main();
