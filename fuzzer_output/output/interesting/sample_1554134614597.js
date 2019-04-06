function main() {
const v3 = [1337,1337];
const v4 = [1337,v3,-1777286928];
const v6 = new Float32Array(v4);
const v9 = this.__lookupSetter__(100,1337);
}
%NeverOptimizeFunction(main);
main();
