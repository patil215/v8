function main() {
function v1(v2,v3,v4,v5) {
    let v7 = 13.37;
    const v8 = v7 + 1;
    v7 = v8;
    const v10 = v7 >> v7;
    const v11 = v10 == Boolean;
}
const v17 = [1337];
for (let v21 = 0; v21 < 100; v21++) {
    let v24 = 0;
    const v25 = v24 + 1;
    v24 = v25;
    const v26 = v1(10,Function,1337,v17,Function);
}
}
%NeverOptimizeFunction(main);
main();
