function main() {
const v2 = [1337,1337,1337];
function v4(v5,v6,v7,v8) {
    function v9(v10,v11,v12,v13) {
        return v5;
    }
    const v15 = [1337];
    const v16 = v15.map(v9);
    for (let v20 = 0; v20 < 100; v20++) {
        const v21 = v9(v5,v8,v15,v2);
    }
    const v22 = v9(...v16,13.37);
}
const v27 = v4(..."input",1);
for (let v28 = 0; v28 < 100; v28++) {
    const v29 = v4(10);
}
}
%NeverOptimizeFunction(main);
main();
