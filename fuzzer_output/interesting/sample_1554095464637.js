function main() {
Function.length = 2;
Function[10] = "undefined";
Function.length = 2;
Function[10] = "undefined";
}
%NeverOptimizeFunction(main);
main();
