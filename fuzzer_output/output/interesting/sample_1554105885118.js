function main() {
function v1(v2,v3,v4,v5) {
    const v6 = 1337 * v4;
    let v12 = 0;
    const v13 = v12 + 1;
    v12 = v13;
}
const v19 = [1337];
for (let v23 = 0; v23 < 100; v23++) {
    const v24 = v1(10,Function,1337,v19,Function);
}
}
%NeverOptimizeFunction(main);
main();
