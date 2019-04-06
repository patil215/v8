function main() {
function v0(v1,v2,v3,v4) {
    function v5(v6,v7,v8,v9) {
    }
    const v15 = [1337];
    for (let v19 = 0; v19 < 100; v19++) {
        const v20 = v5(10,Function,1337,v15,Function);
    }
    const v23 = [1337];
    for (let v28 = 0; v28 != 100; v28++) {
        let v29 = v28;
        let v30 = v23;
        v30[v29] = v28;
        const v31 = v23.shift(Function,1337,1337,v23);
    }
}
const v40 = [1337];
for (let v44 = 0; v44 < 100; v44++) {
    const v45 = v0(10,Function,1337,v40,Function);
}
}
%NeverOptimizeFunction(main);
main();
