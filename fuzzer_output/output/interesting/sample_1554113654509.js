function main() {
function v4(v5,v6,v7,v8,v9) {
    let v11 = undefined;
    for (let v15 = 0; v15 < 100; v15++) {
        const v17 = 0 != v15;
        if (v17) {
            let v19 = 0;
            const v20 = v19 + 1;
        } else {
        }
    }
}
const v21 = v4("undefined",1337,13.37,Math);
}
%NeverOptimizeFunction(main);
main();
