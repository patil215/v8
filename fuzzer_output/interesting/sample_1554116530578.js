function main() {
let v1 = 13.37;
function v2(v3,v4,v5,v6) {
    const v12 = [1337];
    let v14 = undefined;
    const v16 = [v14];
    function v18(v19,v20,v21,v22,v23) {
        return v18;
    }
    for (const v25 of v16) {
        const v26 = typeof v25;
        const v28 = v26 <= "string";
        for (let v32 = 0; v32 < 100; v32++) {
            const v33 = v18(v32,Function,v28,13.37,0);
        }
    }
}
const v39 = [1000];
for (let v42 = 0; v42 < 100; v42 = v42 + v1) {
    const v43 = v2(10,Function,1337,v39,Function);
}
}
%NeverOptimizeFunction(main);
main();
