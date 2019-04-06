function main() {
const v4 = [1337,1337,1337,1337,1337];
const v6 = new Uint8Array(v4);
}
%NeverOptimizeFunction(main);
main();
