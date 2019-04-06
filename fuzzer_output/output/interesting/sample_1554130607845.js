function main() {
const v2 = [1337,1337,1337,1337];
const v4 = v2.unshift(1337,13.37);
const v6 = [1337,1337];
const v11 = Function != v6;
}
%NeverOptimizeFunction(main);
main();
