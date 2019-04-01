function main() {
let v5 = "undefined";
let v7 = "undefined";
let v10 = 0;
function v15(v16,v17,v18,v19) {
    for (let v24 = 0; v24 < 5; v24++) {
        const v26 = Symbol.toStringTag;
        this[v26] = v24;
    }
}
const v32 = [1337];
for (let v36 = 0; v36 < 100; v36++) {
    const v37 = v15(10,Function,1337,v32,Function);
}
let v39 = "undefined";
let v43 = 0;
v43 = 10;
for (const v45 in Function) {
}
for (let v51 = 0; v51 < 5; v51 = v51 + 728813560) {
    const v52 = gc(v51,v51,v51,v51,Function);
}
}
%NeverOptimizeFunction(main);
main();
