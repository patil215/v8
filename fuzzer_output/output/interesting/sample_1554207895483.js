function main() {
function v1(v2,v3,v4,v5) {
    function v6(v7,v8,v9,v10) {
    }
    const v11 = {getInt16:v6};
    const v13 = Object.is(NaN,v3,v11);
    return v13;
}
const v19 = [1000];
for (let v23 = 0; v23 < 100; v23++) {
    const v24 = v1(10,Function,1337,v19,Function);
}
}
%NeverOptimizeFunction(main);
main();
