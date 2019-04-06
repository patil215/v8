function main() {
const v2 = [1337];
const v7 = v2.unshift(3,13.37);
v2.length = 1;
}
%NeverOptimizeFunction(main);
main();
