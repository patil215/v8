function main() {
const v20 = [13.37,13.37,13.37,13.37,13.37];
const v34 = [13.37];
const v43 = v20 || v34;
}
%NeverOptimizeFunction(main);
main();
