function main() {
const v0 = {};
const v2 = [13.37,13.37,13.37,13.37,13.37];
const v4 = [13.37,v2,1337];
const v7 = [13.37,13.37,13.37,13.37];
function v10(v11,v12,v13,v14) {
    let v17 = 13.37;
    const v19 = new SharedArrayBuffer(1957963848,v17);
    const v21 = [13.37,13.37,13.37,13.37,13.37];
    const v23 = [v21,4294967297,13.37,4294967297];
    const v25 = [v23];
    const v26 = {};
    const v28 = new WeakMap(v25,v26);
    Map.__proto__ = v28;
    return v23;
}
let v29 = v4;
const v30 = v10(2388009467,13.37,v29);
const v31 = v10(0,v7,13.37,v29,v0);
}
%NeverOptimizeFunction(main);
main();
