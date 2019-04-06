function main() {
function v1(v2,v3,v4,v5) {
    for (let v11 = 0; v11 < 5; v11++) {
        const v13 = Symbol.toStringTag;
        this[v13] = v11;
    }
    const v20 = [1337];
    let v25 = undefined;
    let v28 = 0;
    const v30 = Symbol.toStringTag;
    Symbol[v30] = v30;
    const v31 = v28 + 1;
    v28 = v31;
    let v35 = 0;
    const v36 = v35 + 1;
    v35 = v36;
}
const v42 = [1337];
for (let v46 = 0; v46 < 100; v46++) {
    const v47 = v1(10,Function,1337,v42,Function);
}
}
%NeverOptimizeFunction(main);
main();
