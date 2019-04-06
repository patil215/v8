function main() {
const v2 = [4294967295,4294967295,4294967295,4294967295,13.37];
const v4 = [13.37];
const v7 = new Int16Array(v2,8154,v4);
}
%NeverOptimizeFunction(main);
main();
