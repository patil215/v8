function main() {
const v3 = [13.37];
const v5 = [1337,1337,1337];
const v6 = [v5,13.37,"number",Set];
for (const v7 of v6) {
    v7[16] = Set;
}
let v13 = undefined;
const v14 = v5.concat(v3,Math,13.37);
}
%NeverOptimizeFunction(main);
main();
