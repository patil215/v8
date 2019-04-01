function main() {
const v1 = [1337,1337];
function v2(v3,v4,v5,v6) {
    let v9 = 0;
    while (v9 <= 1) {
        const v10 = v9 + 1;
        v9 = v10;
    }
    let v12 = "undefined";
    let v16 = 0;
    const v17 = v16 + 1;
    v16 = v17;
}
const v23 = [1337];
for (let v27 = 0; v27 < 100; v27++) {
    const v28 = v2(10,Function,1337,v23,Function);
}
}
%NeverOptimizeFunction(main);
main();
