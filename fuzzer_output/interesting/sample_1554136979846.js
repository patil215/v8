function main() {
const v2 = [1337];
for (let v6 = 0; v6 < 100; v6++) {
    RegExp.rightContext = v2;
}
}
%NeverOptimizeFunction(main);
main();
