function main() {
function v1(v2,v3,v4,v5) {
    let v7 = "undefined";
    let v9 = "undefined";
    let v14 = 0;
    v14 = 10;
    for (let v18 = 0; v18 < 2; v18++) {
        const v19 = v18 | 10;
    }
    let v21 = "undefined";
    let v25 = 0;
    const v26 = v25 + 1;
    v25 = v26;
}
const v32 = [1337];
for (let v36 = 0; v36 < 100; v36++) {
    const v37 = v1(10,Function,1337,v32,Function);
}
}
%NeverOptimizeFunction(main);
main();
