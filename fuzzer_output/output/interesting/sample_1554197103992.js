function main() {
const v0 = {};
const v1 = -Infinity;
const v2 = [v1,v1,v1,v1];
const v4 = new Uint8Array(v2);
v4[v1] = v0;
}
%NeverOptimizeFunction(main);
main();
