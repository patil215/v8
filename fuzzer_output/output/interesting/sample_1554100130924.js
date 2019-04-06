function main() {
const v1 = [1337];
function v2(v3,v4,v5,v6) {
    const v8 = [1337];
    const v9 = {exec:v8};
    const v12 = {max:Function,setPrototypeOf:10};
    let v14 = 0;
    const v16 = Object();
    const v18 = {exec:v14};
    let v19 = "undefined";
    function v20(v21,v22,v23) {
        return v12;
    }
    const v25 = {deleteProperty:v20,construct:v20,get:v2,ownKeys:v2,preventExtension:v20,apply:v20};
    const v27 = new Proxy(v1,v25);
    const v29 = [1337];
    function v30(v31,v32,v33) {
        'use strict'
        const v34 = {source:v30};
    }
    let v37 = 0;
    const v39 = Function + 1;
    v37 = v39;
    const v40 = v29 >= v37;
    for (let v44 = 0; v44 < 100; v44++) {
        const v45 = v30(v29,9,v39,9);
    }
    const v49 = [1337];
    const v50 = {isSealed:v49};
    let v53 = 0;
    do {
        v53[2882799537] = "undefined";
        const v54 = v53 + 1;
        v53 = v54;
    } while (v53 < 5);
    const v55 = 10 | v50;
}
const v61 = [1337];
for (let v65 = 0; v65 < 100; v65++) {
    const v66 = v2(10,Function,1337,v61,Function);
}
}
%NeverOptimizeFunction(main);
main();
