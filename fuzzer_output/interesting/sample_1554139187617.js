function main() {
function v0(v1,v2,v3,v4) {
    let v7 = 0;
    const v8 = v7 + 1;
    v7 = v8;
    const v10 = [1337];
    for (const v11 of v10) {
        const v12 = typeof v11;
        const v14 = v12 <= "string";
        let v17 = undefined;
        const v18 = v14 % v14;
        v18.constructor = v3;
    }
}
const v24 = [1000];
for (let v28 = 0; v28 < 100; v28++) {
    const v29 = v0(10,Function,1337,v24,Function);
}
}
%NeverOptimizeFunction(main);
main();
