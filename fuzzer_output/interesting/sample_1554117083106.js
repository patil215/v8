function main() {
const v1 = [13.37,13.37];
let v5 = 0;
v1.toString = 1337;
const v6 = v5 + 1;
v5 = v6;
const v12 = [13.37,13.37,13.37,13.37,13.37];
function v13(v14,v15,v16,v17) {
    for (let v21 = 0; v21 < 100; v21++) {
        v17.toString = v13;
    }
}
const v27 = [1337];
const v28 = v13(10,Function,1337,v27,Function);
const v29 = v13(1337,13.37,v12,v13);
let v32 = 0;
const v33 = v32 + 1;
v32 = v33;
}
%NeverOptimizeFunction(main);
main();
