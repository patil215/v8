function main() {
function v0(v1,v2,v3,v4) {
    const v6 = [1337];
    let v9 = "undefined";
    const v10 = typeof v9;
    const v12 = v10 === "number";
    if (v12) {
        const v13 = v6 instanceof v12;
    } else {
    }
    const v16 = Function && 13.37;
    let v24 = 0;
    let v26 = 0;
    do {
        const v27 = v26 + 1;
        v26 = v27;
    } while (v26 < 5);
    return v16;
}
const v33 = [1337];
for (let v37 = 0; v37 < 100; v37++) {
    const v38 = v0(10,Function,1337,v33,Function);
}
}
%NeverOptimizeFunction(main);
main();
