function main() {
const v4 = [13.37,13.37,13.37,13.37];
const v6 = v4[1];
const v7 = v6 + v6;
}
%NeverOptimizeFunction(main);
main();
