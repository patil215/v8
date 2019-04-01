function main() {
function v0(v1,v2,v3,v4) {
    const v8 = [1337];
    const v9 = {exec:v8};
    let v10 = "undefined";
    for (const v11 in v9) {
        const v12 = v11 + "undefined";
    }
}
const v19 = [1337];
for (let v23 = 0; v23 < 100; v23++) {
    const v24 = v0(10,Function,1337,v19,Function);
}
}
%NeverOptimizeFunction(main);
main();
