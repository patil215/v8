function main() {
const v0 = {};
const v2 = [Infinity,Infinity,Infinity,Infinity];
const v4 = new Uint8Array(v2);
v4[Infinity] = v0;
}
%NeverOptimizeFunction(main);
main();
