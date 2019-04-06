function main() {
const v2 = [1337,1337,1337,1337,1337];
v2.length = 1337;
const v6 = new Int16Array(v2,8154,255);
}
%NeverOptimizeFunction(main);
main();
