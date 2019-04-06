function main() {
const v1 = [1337,1337,1337,1337,1337];
const v3 = new Uint16Array(v1);
}
%NeverOptimizeFunction(main);
main();
