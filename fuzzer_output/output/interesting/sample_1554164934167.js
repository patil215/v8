function main() {
const v4 = [13.37,13.37];
const v6 = [1337];
const v7 = {construct:13.37,has:gc,deleteProperty:1337,apply:v4,defineProperty:gc,call:v6,isExtensible:3457141139,preventExtension:13.37,ownKeys:v6,get:"PONhvjMUib"};
const v9 = new Proxy(v6,v7);
v9.length = 512;
}
%NeverOptimizeFunction(main);
main();
