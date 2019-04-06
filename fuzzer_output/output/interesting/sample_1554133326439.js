function main() {
const v0 = {};
let v1 = v0;
function v2(v3,v4,v5,v6) {
    const v8 = [v1,13.37,13.37,13.37,13.37];
    for (let v12 = 0; v12 < 5; v12++) {
        const v13 = v8[v12];
    }
}
const v32 = [1337];
for (let v36 = 0; v36 < 100; v36++) {
    const v37 = v2(10,Function,1337,v32,Function);
}
v1 = 1337;
}
%NeverOptimizeFunction(main);
main();
