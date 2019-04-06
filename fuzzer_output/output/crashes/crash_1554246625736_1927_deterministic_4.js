function main() {
const v2 = {map:13.37,toPrimitive:13.37};
function v3(v4,v5,v6,v7) {
    function v8(v9,v10,v11,v12) {
        return v4;
    }
    const v14 = [1337];
    const v15 = v14.map(v8);
    const v16 = v8(...v15,13.37);
    for (let v20 = 0; v20 < 100; v20++) {
        const v21 = v8(v2);
    }
}
const v22 = v3();
for (let v27 = 0; v27 < 100; v27++) {
    const v28 = v3(10);
}
}
%NeverOptimizeFunction(main);
main();
