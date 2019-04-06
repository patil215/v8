function main() {
function v0(v1,v2,v3,v4) {
    const v6 = [13.37,13.37,13.37,13.37];
    const v8 = [13.37];
    const v9 = [v8];
    let v12 = 13.37;
    do {
        const v16 = v6.shift(v9,0);
        const v17 = v0 * v0;
        for (let v18 = 0; v18 < 100; v18++) {
        }
        const v19 = v12 + 1;
        v12 = v19;
    } while (v12 < 7);
    const v20 = [1337];
    let v23 = 0;
    do {
        const v24 = v23 + 1;
        v23 = v24;
    } while (v23 < 6);
    return v20;
}
const v30 = [1337];
for (let v34 = 0; v34 < 100; v34++) {
    const v35 = v0(10,Function,1337,v30,Function);
}
}
%NeverOptimizeFunction(main);
main();
