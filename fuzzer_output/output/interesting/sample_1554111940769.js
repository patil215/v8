function main() {
let v3 = 0;
let v6 = 0;
const v7 = v6 + 1;
v6 = v7;
const v8 = v3 + 1;
v3 = v8;
function v9(v10,v11,v12,v13) {
    let v15 = "undefined";
    for (const v17 in Function) {
        delete Boolean[v17];
    }
    let v20 = 0;
    const v21 = v20 + 1;
    v20 = v21;
}
const v27 = [1337];
for (let v31 = 0; v31 < 100; v31++) {
    const v32 = v9(10,Function,1337,v27,Function);
}
}
%NeverOptimizeFunction(main);
main();
