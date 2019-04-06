function main() {
const v5 = [1337,1337,1337];
const v6 = [v5,13.37,"number",Set];
for (const v7 of v6) {
    v7[16] = 13.37;
}
const v8 = (1337)[100];
const v9 = v5.sort(v8,v6);
}
%NeverOptimizeFunction(main);
main();
