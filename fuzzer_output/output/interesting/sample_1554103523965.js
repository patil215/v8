function main() {
let v2 = 0;
const v3 = v2 + 1;
v2 = v3;
function v5(v6,v7,v8,v9) {
    for (let v13 = 0; v13 < 5; v13++) {
    }
    v9.a = 0;
}
const v19 = [1337];
for (let v23 = 0; v23 < 100; v23++) {
    const v24 = v5(10,Function,1337,v19,Function);
}
}
%NeverOptimizeFunction(main);
main();
