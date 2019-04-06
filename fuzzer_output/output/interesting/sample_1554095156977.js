function main() {
let v15 = 0;
const v16 = v15 + 1;
}
%NeverOptimizeFunction(main);
main();
