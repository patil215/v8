function main() {
const v1 = [1337,1337,1337];
const v15 = v1.shift(1337,100);
}
%NeverOptimizeFunction(main);
main();
