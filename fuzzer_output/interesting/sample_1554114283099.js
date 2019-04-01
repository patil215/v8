function main() {
const v2 = [13.37,13.37,13.37,13.37,13.37];
const v4 = [1337,1337];
const v5 = v4.indexOf(v2,13.37);
}
%NeverOptimizeFunction(main);
main();
