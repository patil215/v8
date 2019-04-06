function main() {
const v3 = new Int16Array(50357);
for (const v4 in v3) {
}
let v7 = 0;
const v8 = v7 + 1;
v7 = v8;
}
%NeverOptimizeFunction(main);
main();
