function main() {
const v1 = [1337,1337,1337,1337];
const v5 = [1337];
const v6 = [v5];
function v8(v9,v10,v11,v12) {
    'use strict'
    let v19 = 0;
    do {
        const v21 = Symbol.toStringTag;
        v1[v21] = Function;
        const v22 = v19 + 1;
        v19 = v22;
    } while (v19 < 10);
    let v25 = 0;
    const v26 = v25 + 1;
    v25 = v26;
    let v30 = 0;
    v30 = 10;
}
const v32 = v8(10,13.37,..."undefined",...v6,9007199254740991);
}
%NeverOptimizeFunction(main);
main();
