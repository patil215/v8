function main() {
function v0(v1,v2,v3,v4) {
    for (let v8 = 0; v8 < 100; v8++) {
        const v11 = new Int8Array(31042);
        v11[0] = 10;
    }
}
const v18 = [1337];
const v19 = v0(10,Function,1337,v18,Function);
}
%NeverOptimizeFunction(main);
main();
