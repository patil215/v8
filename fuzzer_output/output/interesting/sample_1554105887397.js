function main() {
let v2 = 0;
const v3 = v2 + 1;
v2 = v3;
function v4(v5,v6,v7,v8) {
    let v13 = 0;
    do {
        const v14 = v13 + 1;
        v13 = v14;
    } while (v13 < v5);
}
const v20 = [1337];
for (let v24 = 0; v24 < 100; v24++) {
    const v25 = v4(10,Function,1337,v20,Function);
}
}
%NeverOptimizeFunction(main);
main();
