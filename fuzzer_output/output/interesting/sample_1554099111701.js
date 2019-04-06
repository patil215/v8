function main() {
function v0(v1,v2,v3,v4) {
    const v6 = [1337];
    const v7 = {};
    const v9 = new Proxy(v6,v7);
    v9.fill = Function;
    const v12 = [13.37,13.37,13.37,13.37];
    for (let v16 = 0; v16 < 5; v16++) {
        v12[10] = v16;
    }
}
const v22 = [1337];
for (let v26 = 0; v26 < 100; v26++) {
    const v27 = v0(10,Function,1337,v22,Function);
}
}
%NeverOptimizeFunction(main);
main();
