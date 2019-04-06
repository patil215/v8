function main() {
const v7 = [2,2,2,2];
const v10 = new Int32Array(1337);
const v12 = v10.fill(v10,2,10,v7,10);
}
%NeverOptimizeFunction(main);
main();
