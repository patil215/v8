function main() {
const v5 = new SharedArrayBuffer(1337);
const v6 = [1337];
const v7 = v5.slice(-0.0,v6);
}
%NeverOptimizeFunction(main);
main();
