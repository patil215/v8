function main() {
function v0(v1,v2,v3,v4) {
    for (let v8 = 0; v8 < 100; v8++) {
        const v10 = new Int32Array();
        const v11 = v10.fill();
        const v14 = 1337 & NaN;
        const v15 = v11.indexOf();
        const v16 = v15 * v14;
    }
}
const v17 = v0();
}
%NeverOptimizeFunction(main);
main();
