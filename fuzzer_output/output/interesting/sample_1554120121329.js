function main() {
function v1(v2,v3,v4,v5) {
    const v9 = [13.37,13.37,13.37,13.37];
    let v12 = 0;
    const v13 = v12 + 1;
    v12 = v13;
    const v15 = [13.37,13.37,13.37,13.37];
    for (const v16 of v15) {
        const v17 = typeof v4;
        const v19 = v17 === "undefined";
        if (v19) {
            const v20 = Atomics.__defineGetter__;
        } else {
        }
        v9[8] = v16;
    }
    function v23(v24,v25,v26,v27,v28) {
    }
    for (let v32 = 0; v32 < 100; v32++) {
        const v33 = v23("undefined",1337,13.37,Math);
    }
}
const v39 = [1337];
for (let v43 = 0; v43 < 100; v43++) {
    const v44 = v1(10,Function,1337,v39,Function);
}
}
%NeverOptimizeFunction(main);
main();
