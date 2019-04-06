function main() {
function v0(v1,v2,v3,v4) {
    for (let v10 = 0; v10 < 9; v10++) {
        with (v10) {
        }
    }
    let v11 = 0;
    do {
        const v12 = v11 + 1;
        v11 = v12;
    } while (v11 < 4);
    return v11;
}
const v18 = [1337];
for (let v22 = 0; v22 < 100; v22++) {
    const v23 = v0(10,Function,1337,v18,Function);
}
}
%NeverOptimizeFunction(main);
main();
