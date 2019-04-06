function main() {
function v1(v2,v3,v4,v5) {
    function v6(v7,v8,v9,v10) {
    }
    const v12 = {get:v6};
    const v14 = Object.defineProperty(arguments,"raw",v12);
}
const v20 = [1337];
for (let v24 = 0; v24 < 100; v24++) {
    const v25 = v1(10,Function,1337,v20,Function);
}
}
%NeverOptimizeFunction(main);
main();
