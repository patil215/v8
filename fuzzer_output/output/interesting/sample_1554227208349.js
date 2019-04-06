function main() {
const v0 = {};
function v1(v2,v3,v4,v5) {
    for (let v9 = 0; v9 < 100; v9++) {
        const v12 = {tan:13.37,toPrimitive:13.37};
        const v14 = [1337];
        function v15(v16,v17,v18,v19) {
        }
        const v20 = [v0];
        v14.__proto__ = v20;
        const v21 = v20.reduce(v15,"boolean",v12);
    }
}
const v26 = [v0];
const v27 = v1(10,Function,1337,v26,Function);
}
%NeverOptimizeFunction(main);
main();
