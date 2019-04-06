function main() {
function v0(v1,v2,v3,v4) {
    for (let v10 = 0; v10 < 3; v10++) {
        const v11 = v10 >> 1337;
        const v12 = v11 << 1337;
        Error[v12] = v12;
    }
}
for (let v20 = 0; v20 < 100; v20++) {
    const v22 = v0(10,Function,2806098644,Number,Function);
}
}
%NeverOptimizeFunction(main);
main();
