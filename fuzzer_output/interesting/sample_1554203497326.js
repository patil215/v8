function main() {
const v8 = RegExp("symbol",..."symbol");
const v10 = Function("boolean",v8);
const v11 = v10(v10,1337,1337,-2486823143);
}
%NeverOptimizeFunction(main);
main();
