function main() {
const v4 = [13.37,Symbol];
const v5 = v4 - 13.37;
const v10 = [v5,1337,1337];
const v11 = [v10,13.37,"number",Set];
for (const v12 of v11) {
    v12[16] = 13.37;
}
const v13 = new Uint32Array(v10,arguments,v5,"number");
}
%NeverOptimizeFunction(main);
main();
