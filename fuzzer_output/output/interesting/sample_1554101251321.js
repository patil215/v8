function main() {
"delete".__proto__ = "delete";
}
%NeverOptimizeFunction(main);
main();
