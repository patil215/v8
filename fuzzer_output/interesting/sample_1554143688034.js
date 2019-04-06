function main() {
const v1 = {};
function v2(v3,v4,v5,v6) {
    const v8 = [1337];
    const v9 = {exec:v8};
    v9.length = 2;
    const v12 = Symbol.toStringTag;
    v9[v12] = v12;
    let v14 = "undefined";
    let v18 = 0;
    v18 = 10;
    const v21 = [1337];
    function v22(v23,v24,v25) {
        'use strict'
    }
    const v28 = Function + 1;
    for (let v32 = 0; v32 < 100; v32++) {
        const v33 = v22(v21,9,v28,9);
    }
}
const v39 = [1337];
const v43 = v2(10,Function,1337,v39,Function);
let v46 = 0;
const v47 = v46 + 1;
v46 = v47;
const v48 = v2(v1,"rOBrSnd9fM");
}
%NeverOptimizeFunction(main);
main();
