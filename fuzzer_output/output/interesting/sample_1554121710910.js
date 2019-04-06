function main() {
const v2 = [13.37,13.37,13.37,13.37];
const v4 = [1337];
const v5 = v2.toLocaleString("PI",v4,v2);
}
%NeverOptimizeFunction(main);
main();
