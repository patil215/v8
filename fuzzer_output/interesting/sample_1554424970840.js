function main() {
const v3 = [1337];
const v7 = SharedArrayBuffer.__lookupSetter__("length",1337,v3,"length");
}
%NeverOptimizeFunction(main);
main();
