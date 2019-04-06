function main() {
const v1 = [-530617016];
const v3 = [1337,1337,1337,1337];
const v5 = new Int32Array(v1);
const v7 = v5.reverse(v5,1337,1,v3,1);
}
%NeverOptimizeFunction(main);
main();
