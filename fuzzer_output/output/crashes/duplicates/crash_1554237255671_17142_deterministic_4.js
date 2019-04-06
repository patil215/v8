function main() {
const v1 = [1337,1337,1337];
function v3(v4,v5,v6,v7) {
    function v8(v9,v10,v11,v12) {
        return v4;
    }
    const v14 = [1337];
    const v15 = v14.map(v8);
    for (let v19 = 0; v19 < 100; v19++) {
        const v20 = v8(v4,v7,v14,v1);
    }
    const v21 = v8(...v15,13.37);
}
const v22 = v3();
for (let v27 = 0; v27 < 100; v27++) {
    const v28 = v3(10);
}
}
%NeverOptimizeFunction(main);
main();
