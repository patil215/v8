function main() {
const v1 = [4294967295,4294967295,4294967295,4294967295,4294967295];
const v3 = [13.37];
const v6 = new Int16Array(v1,8154,v3);
}
%NeverOptimizeFunction(main);
main();
