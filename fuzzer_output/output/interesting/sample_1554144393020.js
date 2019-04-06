function main() {
let v2 = 1337;
const v4 = [1337];
let v5 = v4;
const v9 = [Set];
const v11 = [1337,1337,1337];
const v12 = [v11,13.37,"number",Set];
for (const v13 of v12) {
    v13[v5] = v13;
}
const v16 = v11.concat(v9,parseFloat,13.37);
const v17 = new Set(v16,"floor",v12,v2);
}
%NeverOptimizeFunction(main);
main();
