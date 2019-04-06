function main() {
const v5 = [1337];
for (let v9 = 0; v9 < 100; v9++) {
    let v11 = undefined;
    let v16 = "undefined";
    const v19 = [1337,1337,1337,1337];
    const v23 = [1337];
    const v24 = [v23];
    function v26(v27,v28,v29,v30) {
        'use strict'
        let v34 = 0;
        do {
            const v36 = Symbol.toStringTag;
            v19[v36] = Function;
            const v37 = v34 + 1;
            v34 = v37;
        } while (v34 < 10);
    }
    const v39 = v26(10,13.37,..."undefined",...v24,9007199254740991);
    let v42 = 0;
    const v43 = v42 + 1;
    v42 = v43;
}
let v47 = -766764740;
v47 = 10;
const v49 = [1337];
let v53 = 0;
v53 = 10;
}
%NeverOptimizeFunction(main);
main();
