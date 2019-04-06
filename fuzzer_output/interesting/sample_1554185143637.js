function main() {
const v3 = [1337,4294967295,4294967295,4294967295,4294967295];
v3.length = 1337;
const v7 = new Int16Array(v3,8154,2093446874);
}
%NeverOptimizeFunction(main);
main();
