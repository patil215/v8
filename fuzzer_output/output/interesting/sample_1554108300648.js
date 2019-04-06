function main() {
function v1(v2,v3,v4,v5) {
    let v7 = 0;
    const v8 = v7 + 1;
    v7 = v8;
    let v10 = -1227592615;
    const v11 = ~v10;
}
const v17 = [1337];
for (let v21 = 0; v21 < 100; v21++) {
    const v22 = v1(10,Function,1337,v17,Function);
}
}
%NeverOptimizeFunction(main);
main();
