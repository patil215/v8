function main() {
const v2 = [1337,1337,1337,1337];
const v4 = v2.includes(1337,13.37);
}
%NeverOptimizeFunction(main);
main();
