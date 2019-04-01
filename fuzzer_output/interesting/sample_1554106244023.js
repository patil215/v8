function main() {
function v0(v1,v2,v3,v4) {
    let v7 = 0;
    while (v7 < 1) {
        const v8 = !v7;
        v7 = v8;
    }
    let v12 = 0;
    const v13 = v12 + 1;
    v12 = v13;
    let v16 = 0;
    const v17 = v16 + 1;
    v16 = v17;
}
const v23 = [1337];
for (let v27 = 0; v27 < 100; v27++) {
    const v28 = v0(10,Function,1337,v23,Function);
}
}
%NeverOptimizeFunction(main);
main();
