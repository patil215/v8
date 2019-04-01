function main() {
function v0(v1,v2,v3,v4) {
    for (let v8 = 0; v8 < 5; v8++) {
        const v10 = [1337];
        with (v10) {
            const v12 = Object();
        }
    }
}
const v18 = [1337];
for (let v22 = 0; v22 < 100; v22++) {
    const v23 = v0(10,Function,1337,v18,Function);
}
}
%NeverOptimizeFunction(main);
main();
