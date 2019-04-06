function main() {
function v0(v1,v2,v3,v4) {
    const v5 = v1 === v3;
    let v6 = v2;
    if (v5) {
        const v7 = v5 * v6;
    } else {
    }
    const v9 = 1 & v5;
}
const v15 = [1337];
for (let v19 = 0; v19 < 100; v19++) {
    const v20 = v0(10,Function,1337,v15,Function);
}
}
%NeverOptimizeFunction(main);
main();
