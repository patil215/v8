function main() {
const v3 = new Float32Array(1337);
const v5 = [String];
const v6 = [v5];
const v7 = v3.lastIndexOf(1.7976931348623157e+308,v6);
}
%NeverOptimizeFunction(main);
main();
