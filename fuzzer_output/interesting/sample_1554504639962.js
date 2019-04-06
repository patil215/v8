function main() {
const v1 = [2.220446049250313e-16];
const v4 = new Int32Array(5);
const v7 = new Int16Array(v4,8154,v1);
}
%NeverOptimizeFunction(main);
main();
