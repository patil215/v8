function main() {
const v0 = [];
const v5 = [1337,1337,1337];
const v6 = [v5,13.37,"number",Set];
for (const v7 of v6) {
    v7[0] = 1;
}
let v11 = v0;
const v12 = v11[100];
const v13 = v5.sort(v12,v6);
}
%NeverOptimizeFunction(main);
main();
