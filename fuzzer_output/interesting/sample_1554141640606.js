function main() {
const v1 = [-1000000000.0];
const v3 = [1337,1337,1337,1337];
const v4 = v1.concat(v1,v3);
}
%NeverOptimizeFunction(main);
main();
