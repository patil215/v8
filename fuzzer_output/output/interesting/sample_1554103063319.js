function main() {
function v0(v1,v2,v3,v4) {
    function v9(v10,v11,v12,v13,v14) {
        for (let v21 = 0; v21 < 5; v21++) {
        }
    }
    const v22 = v9("undefined",1337,13.37,Math);
    let v25 = 0;
    do {
        const v26 = v25 + 1;
        v25 = v26;
    } while (v25 < 1);
    let v28 = "undefined";
    let v32 = 0;
    const v33 = v32 + 1;
    v32 = v33;
}
const v39 = [1337];
for (let v43 = 0; v43 < 100; v43++) {
    const v44 = v0(10,Function,1337,v39,Function);
}
}
%NeverOptimizeFunction(main);
main();
