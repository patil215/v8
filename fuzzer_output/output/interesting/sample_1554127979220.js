function main() {
const v1 = [13.37,13.37,13.37,13.37,13.37];
const v3 = [1337,v1];
const v5 = new Uint16Array(v3);
}
%NeverOptimizeFunction(main);
main();
