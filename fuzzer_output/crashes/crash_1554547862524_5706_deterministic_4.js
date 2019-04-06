function main() {
const v1 = [1337];
function v2(v3,v4,v5,v6) {
    const v7 = [];
    const v8 = v7.indexOf();
    v8[1] = v1;
}
for (let v12 = 0; v12 < 100; v12++) {
    const v13 = v2();
}
}
%NeverOptimizeFunction(main);
main();
