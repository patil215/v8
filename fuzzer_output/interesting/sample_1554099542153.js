function main() {
const v3 = new Uint8Array(3198);
let v7 = 0;
v3[13.37] = 1337;
const v8 = v7 + 1;
v7 = v8;
}
%NeverOptimizeFunction(main);
main();
