function main() {
function v0(v1,v2,v3,v4) {
    for (let v8 = 0; v8 < 5; v8++) {
        const v9 = v4[v8];
    }
}
const v15 = [1337];
for (let v19 = 0; v19 < 100; v19++) {
    const v20 = v0(10,Function,1337,v15,Function);
}
}
%NeverOptimizeFunction(main);
main();
