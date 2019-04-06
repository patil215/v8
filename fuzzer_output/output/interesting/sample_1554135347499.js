function main() {
const v5 = [1337];
let v7 = undefined;
for (let v11 = 0; v11 < 100; v11++) {
    function v16(v17,v18,v19,v20) {
        const v22 = [1337,1337,1337,1337,1337];
        const v24 = new Uint16Array(v22);
        const v26 = v24[0];
    }
    const v27 = [-256,-256,-256];
    const v28 = [v27,13.37,"number",Set];
    const v32 = v16(...v28);
}
}
%NeverOptimizeFunction(main);
main();
