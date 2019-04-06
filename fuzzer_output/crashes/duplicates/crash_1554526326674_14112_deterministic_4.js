function main() {
function v0(v1,v2,v3,v4) {
    for (let v8 = 0; v8 < 100; v8++) {
        const v10 = [1337,1337];
        const v12 = new Int32Array();
        const v13 = v12.fill();
        const v14 = v13.indexOf();
        v14.__proto__ = v10;
    }
}
const v15 = v0();
}
%NeverOptimizeFunction(main);
main();
