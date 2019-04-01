function main() {
const v1 = [1337];
const v2 = {exec:v1};
let v5 = v2;
const v8 = new Int8Array(24114);
v5 = v8;
Function[v5] = 1337;
}
%NeverOptimizeFunction(main);
main();
