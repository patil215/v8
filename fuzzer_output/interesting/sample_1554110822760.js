function main() {
function v0(v1,v2,v3,v4) {
    const v6 = [-536870912];
    const v8 = [1337];
    const v9 = [v8];
    with (v6) {
        const v11 = {get:v0};
        const v13 = Object.defineProperty(v9,-2366909431,v11);
    }
}
const v19 = [1337];
for (let v23 = 0; v23 < 100; v23++) {
    const v24 = v0(10,Function,1337,v19,Function);
}
}
%NeverOptimizeFunction(main);
main();
