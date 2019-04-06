function main() {
const v3 = [13.37,13.37];
const v5 = {call:13.37,apply:v3,isExtensible:13.37,set:3457141139,deleteProperty:1337,has:13.37};
const v7 = new Proxy(BigUint64Array,v5);
const v8 = new v7(v5,v7,BigUint64Array);
}
%NeverOptimizeFunction(main);
main();
