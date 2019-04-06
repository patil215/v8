function main() {
const v1 = [1337,1337,1337,1337];
const v5 = new Uint8Array(1024);
const v6 = v5.includes(v1,-9007199254740993,v5,v5);
}
%NeverOptimizeFunction(main);
main();
