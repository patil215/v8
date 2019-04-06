function main() {
let v1 = undefined;
let v3 = -1;
function v4(v5,v6,v7,v8) {
    const v9 = v7 / v3;
    v1 = v9;
}
const v15 = [1337];
for (let v19 = 0; v19 < 100; v19++) {
    const v20 = v4(10,Function,1337,v15,Function);
}
}
%NeverOptimizeFunction(main);
main();
