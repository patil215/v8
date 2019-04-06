function main() {
function v5(v6,v7,v8,v9,v10) {
    const v11 = 3 >> v8;
    return v11;
}
for (let v15 = 0; v15 < 100; v15++) {
    const v16 = v5("undefined",1337,13.37,Math);
}
}
%NeverOptimizeFunction(main);
main();
