function main() {
const v5 = [1337];
let v10 = undefined;
let v15 = undefined;
let v17 = 1;
function v18(v19,v20,v21,v22) {
    let v24 = 0;
    const v25 = v24 / v17;
    v15 = v25;
}
const v31 = [1337];
for (let v35 = 0; v35 < 100; v35++) {
    const v36 = v18(10,Function,1337,v31,Function);
}
}
%NeverOptimizeFunction(main);
main();
