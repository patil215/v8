function main() {
const v2 = [1337,1337,1337];
const v3 = [v2,13.37,v2];
const v5 = [1337,1337,v3];
const v10 = [13.37];
const v12 = [1337,1337,1337];
v12.__proto__ = v5;
const v13 = [v12,13.37,"number",Set];
for (const v14 of v13) {
    v14[2147483648] = v14;
}
const v17 = v12.concat(v10,Math,13.37);
}
%NeverOptimizeFunction(main);
main();
