function main() {
const v1 = [1337,1337];
for (const v2 in v1) {
}
}
%NeverOptimizeFunction(main);
main();
