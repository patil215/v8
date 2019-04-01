function main() {
const v1 = [13.37,13.37,13.37,13.37,13.37];
let v2 = v1;
function v3(v4,v5,v6,v7) {
    let v9 = "undefined";
    let v10 = v9;
    const v11 = v10 + 1;
    v2 = v11;
}
const v17 = [1337];
for (let v21 = 0; v21 < 100; v21++) {
    const v22 = v3(10,Function,1337,v17,Function);
}
}
%NeverOptimizeFunction(main);
main();
