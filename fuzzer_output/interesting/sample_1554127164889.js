function main() {
const v5 = [1337];
let v7 = undefined;
const v9 = [1337];
function v10(v11,v12,v13) {
    'use strict'
    let v16 = 0;
    const v18 = [1337];
    const v24 = [1337];
    for (let v28 = 0; v28 < 100; v28++) {
        let v30 = undefined;
        let v32 = "undefined";
        let v33 = v18;
        v33[v32] = v24;
    }
    const v34 = v16 + 1;
    v16 = v34;
}
const v37 = Function + 1;
for (let v41 = 0; v41 < 100; v41++) {
    const v42 = v10(v9,9,v37,9);
}
}
%NeverOptimizeFunction(main);
main();
