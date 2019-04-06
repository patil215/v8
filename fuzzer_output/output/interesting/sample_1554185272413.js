function main() {
function v2(v3,v4,v5,v6) {
    let v8 = 0;
    const v9 = v8 + 1;
    function v10(v11,v12,v13,v14) {
        return v8;
    }
    const v15 = {set:v10};
    const v17 = Object.is(-1024,v9,v15);
    return v17;
}
const v22 = [13.37];
for (let v26 = 0; v26 < 100; v26++) {
    const v27 = v2(10,Function,1337,v22,Function);
}
}
%NeverOptimizeFunction(main);
main();
