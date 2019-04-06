function main() {
const v2 = [13.37,13.37,13.37,13.37];
const v6 = new Proxy(v2,Reflect,1337);
const v8 = Symbol.species;
v6[v8] = "tG4Zcss+gi";
}
%NeverOptimizeFunction(main);
main();
