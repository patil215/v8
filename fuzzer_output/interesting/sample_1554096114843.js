function main() {
const v5 = [1337];
const v6 = {exec:v5};
const v16 = v6 & 1337;
}
%NeverOptimizeFunction(main);
main();
