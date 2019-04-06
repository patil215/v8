function main() {
let v2 = 0;
let v8 = 0;
const v9 = v2 + 1;
v2 = v9;
const v10 = [];
function v11(v12,v13,v14,v15) {
    const v18 = v10.NEGATIVE_INFINITY;
    let v19 = 0;
    const v20 = v19 + 1;
    v19 = v20;
    const v21 = v12 + v18;
}
const v27 = [1337];
for (let v31 = 0; v31 < 100; v31++) {
    const v32 = v11(10,Function,1337,v27,Function);
}
}
%NeverOptimizeFunction(main);
main();
