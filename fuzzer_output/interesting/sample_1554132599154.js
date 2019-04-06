function main() {
let v2 = 0;
const v3 = v2 + 1;
v2 = v3;
function v5(v6,v7,v8,v9) {
    const v10 = {};
    const v13 = [1337];
    function v15(v16,v17,v18,v19,v20) {
        const v21 = v16 % 1337;
        v21.constructor = v8;
    }
    for (const v23 of v13) {
        const v24 = typeof v23;
        const v26 = v24 <= v6;
        const v27 = v15(0,0,v13,v10);
        const v28 = v15(v23,Function,v26,13.37,0);
    }
}
const v34 = [1000];
for (let v38 = 0; v38 < 100; v38++) {
    const v39 = v5(10,Function,1337,v34,Function);
}
}
%NeverOptimizeFunction(main);
main();
