function main() {
const v4 = [13.37];
const v6 = [1337,1337,1337];
const v7 = [v6,13.37,"number",Set];
for (const v8 of v7) {
    v8[2147483648] = v8;
    v8[1024] = Set;
}
const v11 = v6.concat(v4,Math,13.37);
}
%NeverOptimizeFunction(main);
main();
