function main() {
const v2 = {};
const v4 = [1337];
function v5(v6,v7,v8,v9) {
    const v11 = [1337];
    const v12 = {exec:v11};
    const v15 = {max:Function,setPrototypeOf:10};
    let v17 = 0;
    const v19 = Object();
    const v21 = {exec:v17};
    let v22 = "undefined";
    function v23(v24,v25,v26) {
        return v15;
    }
    const v27 = {deleteProperty:v23,construct:v23,get:v5,ownKeys:v5,preventExtension:v23,apply:v23};
    const v29 = new Proxy(v4,v27);
    const v31 = [1337];
    function v32(v33,v34,v35) {
        'use strict'
        const v36 = {source:v32};
    }
    let v39 = 0;
    const v41 = Function + 1;
    v39 = v41;
    const v42 = v31 >= v39;
    for (let v46 = 0; v46 < 100; v46++) {
        const v47 = v32(v31,9,v41,9);
    }
    const v51 = {get:v5};
    const v53 = Object.defineProperty(v27,"setInt16",v51);
    const v54 = [v5];
    const v55 = {isSealed:v54};
    for (let v60 = 0; v60 < 4; v60++) {
    }
    const v61 = Function << -9007199254740992;
    let v63 = 0;
    do {
        v63[2882799537] = "undefined";
        const v64 = v63 + 1;
        v63 = v64;
        const v65 = v64 > 1337;
        let v66 = v41;
        let v69 = 0;
        do {
            let v70 = 0;
            const v71 = v69 + 1;
            v69 = v71;
        } while (v69 < 5);
        v2.length = 10;
    } while (v63 < 5);
    const v73 = 10 | v55;
    return v29;
}
const v79 = [1337];
for (let v83 = 0; v83 < 100; v83++) {
    const v84 = v5(10,Function,1337,v79,Function);
}
}
%NeverOptimizeFunction(main);
main();
