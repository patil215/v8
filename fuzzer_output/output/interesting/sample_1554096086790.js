function main() {
let v5 = 0;
const v6 = v5 + 1;
v5 = v6;
function v7(v8,v9,v10,v11) {
}
const v13 = [13.37,13.37,13.37,13.37];
const v15 = v7(v13);
}
%NeverOptimizeFunction(main);
main();
