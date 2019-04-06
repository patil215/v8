function main() {
const v1 = [1337,1337];
const v2 = [];
const v7 = [4,4,4];
const v8 = [v7,13.37,"number",Set];
for (const v9 of v8) {
    v9[0] = 1;
}
let v11 = v2;
const v12 = v11[100];
const v13 = v7.sort(v12,v8);
}
%NeverOptimizeFunction(main);
main();
