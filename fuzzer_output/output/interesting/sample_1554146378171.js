function main() {
const v1 = [1337,1337,1337];
const v6 = [13.37];
const v8 = [1337,1337,1337];
v8.__proto__ = v1;
const v9 = [v8,13.37,"number",Set];
for (const v10 of v9) {
    v10[2147483648] = v10;
}
const v13 = v8.concat(v6,Math,13.37);
}
%NeverOptimizeFunction(main);
main();
