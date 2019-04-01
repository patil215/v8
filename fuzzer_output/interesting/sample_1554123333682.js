function main() {
function v1(v2,v3,v4,v5) {
    let v8 = 0;
    do {
        const v9 = v8 + 1;
        const v10 = v5[v9];
        v8 = v9;
    } while (v8 < 5);
    v5.flags = 1337;
}
const v16 = [1337];
for (let v20 = 0; v20 < 100; v20++) {
    const v21 = v1(10,Function,1337,v16,Function);
}
}
%NeverOptimizeFunction(main);
main();
