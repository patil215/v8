function main() {
const v1 = [Function];
const v5 = v1[1];
let v9 = 0;
v9 = 10;
}
%NeverOptimizeFunction(main);
main();
