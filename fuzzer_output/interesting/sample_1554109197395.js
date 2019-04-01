function main() {
"boolean".__proto__ = "boolean";
}
%NeverOptimizeFunction(main);
main();
