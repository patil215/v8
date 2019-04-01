function main() {
const v3 = [1337,1337,1337];
const v4 = new Set(v3,1337,1337,16);
}
%NeverOptimizeFunction(main);
main();
