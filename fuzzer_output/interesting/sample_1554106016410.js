function main() {
function v0(v1,v2,v3,v4) {
    function v5(v6,v7,v8,v9) {
        const v11 = this.__lookupGetter__;
    }
    const v17 = [1000];
    const v21 = v5(10,Function,1337,v17,Function);
    const v23 = [1337];
}
const v32 = [1337];
for (let v36 = 0; v36 < 100; v36++) {
    const v37 = v0(10,Function,1337,v32,Function);
}
}
%NeverOptimizeFunction(main);
main();
