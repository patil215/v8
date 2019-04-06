function main() {
const v3 = new Int32Array(58176);
function v12(v13,v14,v15,v16) {
    v3[268435456] = v13;
}
for (let v24 = 0; v24 < 100; v24++) {
    const v25 = v12(1,1337);
}
}
%NeverOptimizeFunction(main);
main();
