function main() {
const v4 = [1337,1337,1337,1337];
const v5 = [v4,1,1337];
function v6(v7,v8,v9,v10) {
    const v14 = new Int32Array(1337);
    function v15(v16,v17,v18,v19) {
        v14[-268435456] = v16;
    }
    let v24 = 0;
    do {
        let v27 = 0;
        for (let v31 = 0; v31 < 100; v31++) {
            const v32 = v15(0,1);
        }
        const v33 = v27 + 1;
        v27 = v33;
        const v34 = v24 + 1;
        v24 = v34;
    } while (v24 < 4);
}
const v36 = v6(1337,v5,"undefined");
}
%NeverOptimizeFunction(main);
main();
