function main() {
function v0(v1,v2,v3,v4) {
    let v7 = 0;
    const v8 = v7 + 1;
    v7 = v8;
    let v16 = 0;
    v16 = 10;
    let v18 = 0;
    const v19 = v18 + 1;
    function v23(v24,v25,v26,v27) {
        const v29 = [13.37];
        for (let v32 = v29; v32 < 100; v32++) {
        }
    }
    const v38 = [1337];
    const v42 = v23(10,Function,1337,v38,Function);
}
const v48 = [1337];
for (let v52 = 0; v52 < 100; v52++) {
    const v53 = v0(10,Function,1337,v48,Function);
}
}
%NeverOptimizeFunction(main);
main();
