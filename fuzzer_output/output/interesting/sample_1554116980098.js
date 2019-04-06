function main() {
const v3 = new Int8Array(59220,"undefined",59220,"undefined","undefined");
const v4 = v3[1000];
}
%NeverOptimizeFunction(main);
main();
