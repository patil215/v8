function main() {
const v5 = [13.37,Symbol];
const v6 = v5 - 13.37;
let v7 = 2741319795;
const v12 = [v7,1337,1337];
const v13 = [v12,2.2250738585072014e-308,"number",Set];
for (const v14 of v13) {
    v14[16] = 2.2250738585072014e-308;
}
const v15 = new Uint32Array(v12,arguments,v6,"number");
}
%NeverOptimizeFunction(main);
main();
