function main() {
const v3 = new SharedArrayBuffer(1337);
const v5 = [String];
const v6 = [v5];
const v7 = v3.slice(5.0,v6);
}
%NeverOptimizeFunction(main);
main();
