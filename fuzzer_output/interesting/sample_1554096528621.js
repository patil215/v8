function main() {
let v3 = 0;
const v4 = v3 + 1;
v3 = v4;
Math.valueOf = 9007199254740991;
const v7 = {LOG10E:Math,getPrototypeOf:Math,...Math};
}
%NeverOptimizeFunction(main);
main();
