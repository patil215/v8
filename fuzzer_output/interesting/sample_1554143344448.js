function main() {
function v0(v1,v2,v3,v4) {
    let v7 = 61494;
    const v8 = typeof v7;
    const v10 = v8 === "symbol";
    let v13 = 0;
    do {
        const v14 = v13 * 0;
        const v15 = v13 + 1;
        v13 = v15;
    } while (v13 < 6);
}
const v21 = [1337];
for (let v25 = 0; v25 < 100; v25++) {
    const v26 = v0(10,Function,1337,v21,Function);
}
}
%NeverOptimizeFunction(main);
main();
