function main() {
const v4 = [1337];
const v5 = [v4];
function v7(v8,v9,v10,v11) {
    'use strict'
    const v14 = [13.37];
    let v15 = v14;
    function v16(v17,v18,v19,v20) {
        v18[2] = v14;
        v14.apply = v17;
    }
    function v23(v24,v25,v26,v27) {
    }
    const v36 = [1337];
    for (let v40 = 0; v40 < 100; v40++) {
        const v41 = v23(10,Function,1337,v36,Function);
    }
    const v45 = [1337];
    const v46 = v16(10,SharedArrayBuffer,1337,v45,Function);
    const v48 = v16(v15,v14,100,13.37);
}
const v50 = v7(10,13.37,..."undefined",...v5,9007199254740991);
const v51 = v7(13.37,"undefined",v7,v5,v50);
}
%NeverOptimizeFunction(main);
main();
