function main() {
const v5 = [13.37,13.37];
const v7 = {call:13.37,apply:v5,isExtensible:13.37,set:3457141139,deleteProperty:1337,has:13.37};
const v9 = new Proxy(gc,v7);
const v10 = new v9(v7,v9,gc);
const v11 = (1)[v10];
}
%NeverOptimizeFunction(main);
main();
