function main() {
const v3 = [1337,4294967295,4294967295,4294967295,4294967295];
const v6 = new Int16Array(v3,8154,2093446874);
const v8 = new Uint8Array(v6);
}
%NeverOptimizeFunction(main);
main();
