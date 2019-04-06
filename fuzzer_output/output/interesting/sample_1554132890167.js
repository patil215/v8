function main() {
for (const v4 in null) {
}
}
%NeverOptimizeFunction(main);
main();
