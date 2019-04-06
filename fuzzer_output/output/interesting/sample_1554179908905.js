function main() {
function v1(v2,v3,v4,v5) {
    function v6(v7,v8,v9,v10) {
    }
    const v12 = {set:v6};
    const v14 = Object.is(13.37,-9007199254740993,v12);
    return v14;
}
const v20 = [1000];
for (let v24 = 0; v24 < 100; v24++) {
    const v25 = v1(10,Function,1337,v20,Function);
}
}
%NeverOptimizeFunction(main);
main();
