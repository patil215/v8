function main() {
function v0(v1,v2,v3,v4) {
    let v7 = 0;
    do {
        const v8 = v7 + 1;
        v7 = v8;
    } while (v7 < 4);
    return v7;
}
const v14 = [1337];
for (let v18 = 0; v18 < 100; v18++) {
    const v19 = v0(10,Function,1337,v14,Function);
}
}
%NeverOptimizeFunction(main);
main();
