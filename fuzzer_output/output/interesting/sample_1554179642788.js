function main() {
const v2 = [4294967295,4294967295,4294967295,4294967295,4294967295];
v2.length = 1337;
const v6 = new Int16Array(v2,8154,2093446874);
}
%NeverOptimizeFunction(main);
main();
