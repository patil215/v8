function main() {
const v0 = {};
function v1(v2,v3,v4,v5) {
    const v7 = [1337];
    for (let v11 = 0; v11 < 100; v11++) {
        const v14 = {map:13.37,toPrimitive:13.37};
        function v15(v16,v17,v18,v19) {
            return v16;
        }
        const v21 = [1337];
        const v22 = v21.map(v15,"boolean",v14);
    }
}
const v30 = [v0];
const v31 = v1(10,Function,1337,v30,Function);
}
%NeverOptimizeFunction(main);
main();
