function main() {
function v0(v1,v2,v3,v4) {
    let v6 = "undefined";
    let v10 = 0;
    do {
        const v11 = v10 + 1;
        v10 = v11;
    } while (v10 != 5);
}
const v17 = [1337];
for (let v21 = 0; v21 < 100; v21++) {
    const v22 = v0(10,Function,1337,v17,Function);
}
}
%NeverOptimizeFunction(main);
main();
