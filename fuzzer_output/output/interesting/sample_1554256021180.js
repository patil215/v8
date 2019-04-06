function main() {
function v1(v2,v3,v4,v5) {
    let v12 = 0;
    const v13 = v12 + 1;
    v12 = v13;
    for (let v16 = 0; v16 < 100; v16++) {
        const v18 = [1000000.0,1000000.0,1000000.0,1000000.0,1000000.0];
        function v20(v21,v22,v23,v24) {
        }
        v18[10] = 0;
        const v27 = v18.pop(v20,0,10);
    }
}
const v32 = [1337];
const v33 = v1(10,Function,1337,v32,Function);
}
%NeverOptimizeFunction(main);
main();
