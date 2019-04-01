function main() {
const v4 = [1337];
const v6 = Error(1337,Error,4294967297,v4);
}
%NeverOptimizeFunction(main);
main();
