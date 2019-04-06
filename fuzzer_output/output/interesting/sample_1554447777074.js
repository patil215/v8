function main() {
const v1 = [9007199254740992];
const v4 = new Uint32Array(36156);
const v5 = v4.fill(v1,Uint32Array);
}
%NeverOptimizeFunction(main);
main();
