function main() {
const v1 = [-1739622486];
const v2 = [v1];
const v3 = {};
const v7 = [1337,1337,1337];
const v8 = [v7,13.37,"number",v7];
const v10 = new BigUint64Array(v2,v3);
for (const v11 of v10) {
    const v12 = v11 & v11;
    const v13 = -1739622486 != v12;
}
}
%NeverOptimizeFunction(main);
main();
