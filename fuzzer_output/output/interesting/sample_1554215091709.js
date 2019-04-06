function main() {
function v2(v3,v4,v5,v6) {
    let v7 = 13.37;
    const v8 = v7 + 1;
    function v9(v10,v11,v12,v13) {
    }
    const v14 = {set:v9};
    const v16 = Object.is(-1024,v8,v14);
    return v16;
}
const v21 = [13.37];
for (let v25 = 0; v25 < 100; v25++) {
    const v26 = v2(10,Function,1337,v21,Function);
}
}
%NeverOptimizeFunction(main);
main();
