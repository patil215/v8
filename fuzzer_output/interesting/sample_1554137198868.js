function main() {
const v1 = [13.37];
const v3 = [1337,1337,1337,v1,1337];
const v5 = new Uint8Array(v3);
}
%NeverOptimizeFunction(main);
main();
