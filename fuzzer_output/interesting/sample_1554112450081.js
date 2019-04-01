function main() {
let v1 = 1337;
function v2(v3,v4,v5,v6) {
    let v8 = 13.37;
    const v9 = v8 + 1;
    v1 = v9;
}
const v15 = [1337];
for (let v19 = 0; v19 < 100; v19++) {
    const v20 = v2(10,Function,1337,v15,Function);
}
}
%NeverOptimizeFunction(main);
main();
