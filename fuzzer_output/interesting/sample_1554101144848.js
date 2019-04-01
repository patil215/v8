function main() {
function v0(v1,v2,v3,v4) {
    let v8 = 0;
    do {
        const v9 = v8 + "undefined";
        const v10 = v8 + 1;
        v8 = v10;
    } while (v8 < 7);
    const v12 = [1337];
    const v13 = [v12];
}
const v19 = [1337];
for (let v23 = 0; v23 < 100; v23++) {
    const v24 = v0(6,Function,1337,v19,Function);
}
}
%NeverOptimizeFunction(main);
main();
