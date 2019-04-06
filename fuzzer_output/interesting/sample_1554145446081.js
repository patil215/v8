function main() {
const v1 = [1337];
let v2 = v1;
const v6 = [Set];
const v8 = [1337,1337,1337];
const v9 = [v8,13.37,"number",Set];
for (const v10 of v9) {
    v10[v2] = v10;
}
v8.length = 0;
const v14 = v8.concat(v6,parseFloat,13.37);
}
%NeverOptimizeFunction(main);
main();
