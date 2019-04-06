function main() {
const v3 = Function.__defineGetter__(1337,Function,10);
}
%NeverOptimizeFunction(main);
main();
