function main() {
for (const v3 in Atomics) {
    delete v3[v3];
}
}
%NeverOptimizeFunction(main);
main();
