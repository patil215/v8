function main() {
const v2 = ["St3xmIJllu","St3xmIJllu",-1000.0];
const v6 = new Proxy(v2,Reflect,1337);
v6[0] = 1337;
}
%NeverOptimizeFunction(main);
main();
