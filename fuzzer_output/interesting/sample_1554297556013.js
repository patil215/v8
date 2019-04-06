function main() {
const v3 = [13.37,13.37,1];
const v8 = [9007199254740993,9007199254740993,Symbol,9007199254740993,-2.220446049250313e-16];
const v9 = new Uint16Array(v8,-2.220446049250313e-16);
const v10 = v9.fill(-2.220446049250313e-16,v3,1337);
const v12 = new Uint32Array(v10);
}
%NeverOptimizeFunction(main);
main();
