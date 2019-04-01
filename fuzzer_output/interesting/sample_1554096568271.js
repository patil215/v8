function main() {
function v2(v3,v4,v5) {
    return v5;
}
for (let v9 = 0; v9 < 5; v9++) {
    for (let v13 = 0; v13 < 100; v13++) {
        const v14 = v2(Function,v9,v9,"undefined");
    }
}
}
%NeverOptimizeFunction(main);
main();
