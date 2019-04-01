function main() {
const v2 = [1337,1337,1337,1337];
const v6 = Object.freeze(v2,Object);
}
%NeverOptimizeFunction(main);
main();
