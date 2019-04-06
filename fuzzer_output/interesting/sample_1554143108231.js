function main() {
const v5 = [13.37];
const v7 = [1337,9007199254740992,1337];
const v8 = [v7,13.37,"number",Set];
for (const v9 of v8) {
    v9[1024] = 1337;
}
const v12 = v7.concat(v5,Math,13.37);
}
%NeverOptimizeFunction(main);
main();
