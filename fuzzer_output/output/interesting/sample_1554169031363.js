function main() {
let v2 = undefined;
let v4 = undefined;
let v6 = -1;
function v7(v8,v9,v10,v11) {
    let v12 = v2;
    const v13 = v12 / v6;
    v4 = v13;
}
const v19 = [1337];
for (let v23 = 0; v23 < 100; v23++) {
    const v24 = v7(10,Function,1337,v19,Function);
}
}
%NeverOptimizeFunction(main);
main();
