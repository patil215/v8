// Flags: --allow-natives-syntax

function main() {
const v1 = [1337,1337,1337,1337];
const v4 = [1337,1337,1337,1337];
const v5 = [v4,1,1337];
function v6(v7,v8,v9,v10) {
    let v12 = "undefined";
    for (const v13 in v12) {
        const v14 = [v1];
        let v15 = v14;
        const v16 = v15.indexOf();
        const v17 = v16 >> v5;
        for (let v21 = 0; v21 < 100; v21++) {
        }
    }
}
const v22 = v6();
}
%NeverOptimizeFunction(main);
main();
