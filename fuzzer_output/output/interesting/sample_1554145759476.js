function main() {
const v1 = {};
const v3 = new Proxy(String,v1);
const v4 = Proxy instanceof v3;
const v5 = v3.__lookupGetter__(v1,v1);
}
%NeverOptimizeFunction(main);
main();
