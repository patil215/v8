function main() {
function v0(v1,v2,v3,v4) {
    for (let v11 = 0; v11 < 3; v11++) {
        const v12 = v11 >> 7;
        const v13 = v12 << 1337;
        Error[v13] = v13;
    }
}
for (let v21 = 0; v21 < 100; v21++) {
    const v23 = v0(10,Function,2806098644,Number,Function);
}
}
%NeverOptimizeFunction(main);
main();
