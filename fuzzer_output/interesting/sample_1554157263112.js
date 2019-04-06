function main() {
const v8 = new Int16Array(53990);
const v10 = {};
let v12 = undefined;
v8[2] = undefined;
}
%NeverOptimizeFunction(main);
main();
