function main() {
const v0 = {};
for (const v2 in "undefined") {
    Function.__proto__ = v0;
}
}
%NeverOptimizeFunction(main);
main();
