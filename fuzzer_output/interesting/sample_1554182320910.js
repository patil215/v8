function main() {
const v5 = [13.37,Symbol];
const v9 = v5 - 13.37;
let v10 = 9007199254740991;
const v15 = [v10,1337,1337];
const v16 = [v15,13.37,"number",Set];
for (const v17 of v16) {
    v17[16] = 13.37;
}
const v18 = new Uint32Array(v15,arguments,v9,"number");
}
%NeverOptimizeFunction(main);
main();
