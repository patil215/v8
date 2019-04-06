function main() {
const v2 = [13.37,13.37,1];
const v10 = [9007199254740993,9007199254740993,9007199254740993,9007199254740993,-2.220446049250313e-16];
const v11 = new Uint16Array(v10,-2.220446049250313e-16);
const v12 = v11.fill(Uint16Array,v2,1337);
}
%NeverOptimizeFunction(main);
main();
