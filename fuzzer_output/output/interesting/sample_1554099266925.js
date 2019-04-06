function main() {
function v1(v2,v3,v4,v5) {
    let v7 = "undefined";
    const v9 = [-536870912];
    const v11 = [1337];
    const v12 = [v11];
    with (v9) {
        v7 = v12;
    }
}
const v18 = [1337];
for (let v22 = 0; v22 < 100; v22++) {
    const v23 = v1(10,Function,1337,v18,Function);
}
let v28 = "undefined";
let v32 = 0;
v32 = 10;
}
%NeverOptimizeFunction(main);
main();
