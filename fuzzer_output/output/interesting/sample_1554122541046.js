function main() {
function v1(v2,v3,v4,v5) {
    function v6(v7,v8,v9,v10) {
        function v11(v12,v13,v14) {
            return v3;
        }
        let v20 = 0;
        with (v5) {
        }
        return arguments;
    }
    const v29 = [1337];
    const v30 = v6(10,Function,1337,v29,Function);
    for (let v35 = 0; v35 < 100; v35++) {
    }
    const v37 = [1337];
    const v39 = [1337];
    v39[4] = Object;
}
const v45 = [1337];
for (let v49 = 0; v49 < 100; v49++) {
    const v50 = v1(10,Reflect,1337,v45,Function);
}
}
%NeverOptimizeFunction(main);
main();
