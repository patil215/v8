function main() {
const v6 = Object.seal(arguments,1);
v6[0] = 1;
}
%NeverOptimizeFunction(main);
main();
