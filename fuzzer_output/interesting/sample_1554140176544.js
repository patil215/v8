function main() {
function v0(v1,v2,v3,v4) {
    const v6 = [1337];
    for (const v7 of v6) {
        const v8 = typeof v7;
        const v10 = v8 === "string";
        const v11 = v10 % v10;
        v11.constructor = v3;
    }
}
const v17 = [1000];
for (let v21 = 0; v21 < 100; v21++) {
    const v22 = v0(10,Function,1337,v17,Function);
}
}
%NeverOptimizeFunction(main);
main();
