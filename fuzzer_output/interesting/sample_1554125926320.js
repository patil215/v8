function main() {
function v0(v1,v2,v3,v4) {
    const v5 = {};
    const v8 = [1337];
    function v10(v11,v12,v13,v14,v15) {
        const v16 = v11 % v11;
        v16.constructor = v3;
    }
    for (const v18 of v8) {
        const v19 = typeof v18;
        const v22 = v19 <= "string";
        const v23 = v10(0,0,v8,v5);
        const v27 = v10(v18,Function,v22,13.37,0);
    }
}
const v33 = [1000];
for (let v37 = 0; v37 < 100; v37++) {
    const v38 = v0(10,Function,1337,v33,Function);
}
}
%NeverOptimizeFunction(main);
main();
