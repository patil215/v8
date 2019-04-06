function main() {
const v1 = {};
const v4 = Object.seal(v1,1337);
const v6 = Symbol.match;
v1[v6] = 13.37;
}
%NeverOptimizeFunction(main);
main();
