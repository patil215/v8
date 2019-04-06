function main() {
const v5 = [13.37];
const v7 = [1337,1337,1337];
const v8 = [v7,13.37,"number",Set];
for (const v9 of v8) {
    v9[3647412246] = v9;
    v9[16] = Set;
    v9[1337] = 4251371311;
}
const v12 = v7.concat(v5,Math,13.37);
}
%NeverOptimizeFunction(main);
main();
