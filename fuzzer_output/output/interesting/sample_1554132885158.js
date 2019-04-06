function main() {
function v0(v1,v2,v3,v4) {
    const v6 = [13.37,13.37,13.37,13.37];
    function v7(v8,v9,v10,v11) {
        let v14 = 0;
        do {
            for (const v15 in v6) {
            }
            const v16 = v14 + 1;
            v14 = v16;
        } while (v14 < 6);
    }
    const v22 = [1337];
    const v23 = v7(10,Function,1337,v22,Function);
    const v26 = new Uint8ClampedArray(32822);
    v26[0] = 32822;
}
const v32 = [1337];
for (let v36 = 0; v36 < 100; v36++) {
    const v37 = v0(10,Function,1337,v32,Function);
}
}
%NeverOptimizeFunction(main);
main();
