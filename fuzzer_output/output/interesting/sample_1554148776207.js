function main() {
const v3 = new Int32Array(58176);
function v4(v5,v6,v7,v8) {
    v3[256] = v5;
}
for (let v13 = 0; v13 < 100; v13++) {
    const v14 = v4(1,1337);
}
}
%NeverOptimizeFunction(main);
main();
