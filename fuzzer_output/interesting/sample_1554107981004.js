function main() {
const v6 = Object.preventExtensions(1337,1337);
}
%NeverOptimizeFunction(main);
main();
