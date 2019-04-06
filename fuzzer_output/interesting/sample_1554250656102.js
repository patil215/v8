function main() {
const v1 = [1337,1337,1337,1337];
const v4 = new Int32Array(1337);
const v6 = v4.indexOf(v4,1337,1,v1,1);
}
%NeverOptimizeFunction(main);
main();
