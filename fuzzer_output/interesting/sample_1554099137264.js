function main() {
function v0(v1,v2,v3,v4) {
    let v6 = "undefined";
    const v8 = [-536870912];
    const v10 = [1337];
    const v11 = [v10];
    with (v8) {
        v6 = v11;
    }
}
const v17 = [1337];
for (let v21 = 0; v21 < 100; v21++) {
    const v22 = v0(10,Function,1337,v17,Function);
}
}
%NeverOptimizeFunction(main);
main();
