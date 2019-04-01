function main() {
const v2 = new Error(32631);
}
%NeverOptimizeFunction(main);
main();
