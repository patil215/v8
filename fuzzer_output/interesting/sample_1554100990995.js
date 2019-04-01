function main() {
const v1 = [1337];
function v2(v3,v4,v5,v6) {
    const v8 = [1337];
    const v9 = {exec:v8};
    const v12 = {max:Function,setPrototypeOf:10};
    let v14 = 0;
    const v16 = Object();
    const v17 = {exec:v14};
    function v18(v19,v20,v21) {
    }
    const v22 = {deleteProperty:v18,construct:v18,get:v2,ownKeys:v2,preventExtension:v18,apply:v18};
    const v24 = new Proxy(v1,v22);
    const v26 = [1337];
    function v27(v28,v29,v30) {
        'use strict'
        const v31 = {source:v27};
    }
    let v34 = 0;
    const v36 = Function + 1;
    for (let v40 = 0; v40 < 100; v40++) {
        const v41 = v27(v26,9,v36,9);
    }
    const v45 = [1337];
    const v46 = {isSealed:v45};
    let v49 = 0;
    do {
        v49[2882799537] = "undefined";
        const v50 = v49 + 1;
        v49 = v50;
    } while (v49 < 5);
    const v51 = 10 | v46;
}
const v57 = [1337];
for (let v61 = 0; v61 < 100; v61++) {
    const v62 = v2(10,Function,1337,v57,Function);
}
}
%NeverOptimizeFunction(main);
main();
