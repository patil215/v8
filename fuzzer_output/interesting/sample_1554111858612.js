function main() {
const v1 = {};
const v3 = [13.37,13.37,13.37,13.37];
const v7 = v3.__lookupSetter__(0,"number",v1);
}
%NeverOptimizeFunction(main);
main();
