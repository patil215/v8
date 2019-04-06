function main() {
function v2(v3,v4,v5,v6) {
    const v8 = [1337,1337,13.37];
    for (let v12 = 0; v12 < 100; v12++) {
        const v14 = Math.min(undefined,v12);
        const v16 = arguments.__proto__;
        v16[v8] = v14;
    }
}
const v25 = [6];
const v26 = v2(10,parseFloat,1,v25,Function);
}
%NeverOptimizeFunction(main);
main();
