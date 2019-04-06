function main() {
let v2 = 0;
const v3 = v2 + 1;
v2 = v3;
const v5 = [13.37,13.37,13.37,13.37,13.37];
let v8 = 0;
const v13 = [-1000000000000.0,-1000000000000.0,-1000000000000.0,-1000000000000.0];
const v15 = [v13,Infinity,Infinity,Infinity,Infinity];
const v17 = {a:1337};
function v19(v20,v21,v22,v23) {
}
const v24 = v15.toLocaleString(v19,v17,13.37);
let v27 = undefined;
const v28 = {...v24};
}
%NeverOptimizeFunction(main);
main();
