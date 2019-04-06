function main() {
let v1 = 13.37;
for (const v2 in v1) {
    const v3 = typeof v2;
    const v5 = v3 === "boolean";
}
function v6(v7,v8,v9,v10) {
    const v12 = [1337];
    const v13 = [v12];
    v8.__proto__ = v13;
    const v15 = Function.includes;
    let v17 = "undefined";
    let v20 = 0;
    const v21 = v20 + 1;
    v20 = v21;
}
const v27 = [1337];
for (let v31 = 0; v31 < 100; v31++) {
    const v32 = v6(10,Function,1337,v27,gc);
}
}
%NeverOptimizeFunction(main);
main();
