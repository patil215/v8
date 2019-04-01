function main() {
const v1 = [1337];
const v2 = {exec:v1};
let v6 = 0;
Function.__proto__ = v2;
for (const v8 in Function) {
}
}
%NeverOptimizeFunction(main);
main();
