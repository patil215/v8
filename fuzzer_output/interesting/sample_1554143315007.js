function main() {
const v5 = [1337,9007199254740992,1337];
const v6 = [v5,13.37,"number",Set];
const v9 = Boolean.copyWithin;
const v10 = typeof v9;
const v12 = v10 === "function";
const v13 = [v12];
const v15 = new BigUint64Array(v13,1337);
}
%NeverOptimizeFunction(main);
main();
