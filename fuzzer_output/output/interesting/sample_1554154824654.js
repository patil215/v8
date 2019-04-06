function main() {
const v1 = [1337,1337,1337,1337];
const v2 = {};
const v5 = new Int32Array(1337);
const v9 = v5.fill(v5,1337,v2,v1,1);
}
%NeverOptimizeFunction(main);
main();
