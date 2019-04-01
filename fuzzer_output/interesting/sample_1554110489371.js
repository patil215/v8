function main() {
const v2 = [9007199254740992];
const v4 = Math.sin("undefined",v2);
let v7 = 0;
const v8 = v7 + 1;
v7 = v8;
}
%NeverOptimizeFunction(main);
main();
