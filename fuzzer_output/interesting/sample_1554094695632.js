function main() {
for (let v74 = 0; v74 < 2; v74++) {
    continue;
}
}
%NeverOptimizeFunction(main);
main();
