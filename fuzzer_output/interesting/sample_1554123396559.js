function main() {
function v0(v1,v2,v3,v4) {
    const v6 = [1337];
    const v7 = [v6];
    const v8 = {};
    const v10 = new String(v7,v8);
    for (const v11 of v10) {
    }
}
const v23 = [1337];
for (let v27 = 0; v27 < 100; v27++) {
    const v28 = v0(10,Function,1337,v23,Function);
}
}
%NeverOptimizeFunction(main);
main();
