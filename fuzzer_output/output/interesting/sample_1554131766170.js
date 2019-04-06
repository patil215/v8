function main() {
const v5 = [1337];
let v7 = undefined;
let v16 = 0;
v16 = 1337;
const v19 = [1337,1337,1337,1337];
const v20 = [v19,1,1337];
let v22 = undefined;
function v26(v27,v28,v29,v30) {
    v16 = v26;
}
const v36 = [1337];
const v37 = v26(10,Function,1337,v36,Function);
const v39 = Symbol.unscopables;
gc[v39] = v20;
const v41 = Symbol.toStringTag;
v16[v41] = v7;
}
%NeverOptimizeFunction(main);
main();
