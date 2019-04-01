function main() {
function v1(v2,v3,v4,v5) {
    const v6 = [0];
    const v7 = {exec:v6};
    let v10 = 0;
    const v13 = [1337];
    for (const v16 of v13) {
        const v17 = typeof v16;
        const v19 = v17 <= "string";
        let v21 = undefined;
        const v22 = v16 / 5;
    }
    const v23 = v7 + 1;
    v10 = v23;
}
const v29 = [1337];
for (let v33 = 0; v33 < 100; v33++) {
    const v34 = v1(10,Reflect,1337,v29,Function);
}
}
%NeverOptimizeFunction(main);
main();
