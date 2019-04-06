function main() {
let v2 = 0;
const v3 = v2 + 1;
v2 = v3;
function v4(v5,v6) {
}
const v9 = [13.37,13.37,13.37,13.37,13.37];
const v10 = [v9];
function v11(v12,v13,v14,v15) {
    for (let v19 = 0; v19 < 100; v19++) {
        function v20(v21,v22,v23,v24) {
        }
    }
    const v25 = v4(...arguments);
}
const v31 = [1337];
const v32 = v11(10,Function,1337,v31,Function);
const v33 = v11(1337,v10);
}
%NeverOptimizeFunction(main);
main();
