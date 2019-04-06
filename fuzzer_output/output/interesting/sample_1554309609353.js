function main() {
const v6 = new Float32Array(1337);
const v7 = [13.37];
const v8 = [v7];
const v9 = v6.lastIndexOf(1000.0,v8);
}
%NeverOptimizeFunction(main);
main();
