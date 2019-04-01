function main() {
for (let v12 = 0; v12 < 6; v12++) {
    continue;
}
}
%NeverOptimizeFunction(main);
main();
