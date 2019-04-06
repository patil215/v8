function main() {
function v0(v1,v2,v3,v4) {
    const v6 = [13.37];
    for (let v10 = 0; v10 < 100; v10++) {
        const v12 = Array(v6);
        v12[8] = v12;
    }
}
const v19 = [1337];
const v20 = v0(10,Function,1337,v19,Function);
}
%NeverOptimizeFunction(main);
main();
