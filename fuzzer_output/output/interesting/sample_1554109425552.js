function main() {
function v0(v1,v2,v3,v4) {
    let v7 = 0;
    const v8 = v7 + 1;
    v7 = v8;
    let v11 = 0;
    let v14 = 0;
    do {
        const v15 = v14 + 1;
        v14 = v15;
    } while (v14 <= 10);
    const v16 = v11 + 1;
    v11 = v16;
    let v19 = 0;
    const v20 = v19 + 1;
    v19 = v20;
}
const v26 = [1337];
for (let v30 = 0; v30 < 100; v30++) {
    const v31 = v0(10,Function,1337,v26,Function);
}
}
%NeverOptimizeFunction(main);
main();
