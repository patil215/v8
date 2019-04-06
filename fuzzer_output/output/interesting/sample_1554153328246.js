function main() {
const v4 = [-2724971486,-2724971486,-2724971486];
const v9 = [13.37];
const v11 = [1337,1337,1337];
v11.__proto__ = v4;
const v12 = [v11,13.37,"number",Set];
for (const v13 of v12) {
    v13[2147483648] = v13;
}
const v16 = v11.concat(v9,Math,13.37);
}
%NeverOptimizeFunction(main);
main();
