function main() {
const v2 = [1337,1337,2.2250738585072014e-308,1337,1337];
let v3 = v2;
const v5 = new Uint16Array(v3);
}
%NeverOptimizeFunction(main);
main();
