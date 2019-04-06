function main() {
function v0(v1,v2,v3,v4) {
    let v6 = 0;
    let v8 = "undefined";
    const v11 = [1337];
    const v12 = [v11];
    const v13 = v6 || v12;
    let v16 = 0;
    const v17 = v16 + 1;
    v16 = v17;
}
const v23 = [1337];
for (let v27 = 0; v27 < 100; v27++) {
    const v28 = v0(10,Function,1337,v23,Function);
}
}
%NeverOptimizeFunction(main);
main();
