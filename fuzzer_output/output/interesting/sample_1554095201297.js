function main() {
delete "number"["number"];
}
%NeverOptimizeFunction(main);
main();
