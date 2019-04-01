function main() {
const v6 = [1073741824];
for (const v8 in v6) {
}
}
%NeverOptimizeFunction(main);
main();
