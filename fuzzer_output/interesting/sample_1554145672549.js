function main() {
let v1 = 0;
const v2 = v1 - 1;
const v5 = Math.pow(v2,10);
}
%NeverOptimizeFunction(main);
main();
