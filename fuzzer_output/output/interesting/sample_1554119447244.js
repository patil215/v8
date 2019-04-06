function main() {
const v2 = [1337,1337,1337,1337];
const v3 = v2.includes(v2,-0.0);
}
%NeverOptimizeFunction(main);
main();
