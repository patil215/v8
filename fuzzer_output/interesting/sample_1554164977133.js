function main() {
const v3 = [13.37,13.37];
const v5 = {call:13.37,apply:v3,isExtensible:13.37,set:3457141139,deleteProperty:1337,has:13.37};
const v7 = new Proxy(gc,v5);
const v8 = [1337,gc];
const v9 = new v7(v5,v7,gc);
}
%NeverOptimizeFunction(main);
main();
