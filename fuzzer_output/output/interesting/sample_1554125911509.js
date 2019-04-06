function main() {
function v1(v2,v3,v4,v5) {
    const v8 = Function && 13.37;
    const v10 = [13.37];
    const v11 = [v10];
    const v13 = [1337];
    const v14 = {exec:v13};
    const v16 = [13.37,13.37,13.37,13.37];
    let v20 = 0;
    do {
        const v21 = v16.push(v14,v11,Map,v8);
        const v22 = v20 + 1;
        v20 = v22;
    } while (v20 < 3);
    let v25 = "undefined";
}
const v32 = [1337];
for (let v36 = 0; v36 < 100; v36++) {
    const v37 = v1(10,Function,1337,v32,Function);
}
}
%NeverOptimizeFunction(main);
main();
