// Flags: --allow-natives-syntax

function main() {
for (let v3 = 0; v3 < 5; v3++) {
    const v6 = [1337,1337,1337,1337];
    const v7 = [v6,1,1337];
    function v8(v9,v10,v11,v12) {
        const v14 = [13.37];
        let v15 = v14;
        const v16 = v15.indexOf();
        const v17 = v16 >> v7;
        for (let v21 = 0; v21 < 100; v21++) {
        }
    }
    const v22 = v8();
}
}
%NeverOptimizeFunction(main);
main();
