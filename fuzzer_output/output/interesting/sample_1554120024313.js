function main() {
function v1(v2,v3,v4,v5) {
    let v8 = 0;
    const v9 = v8 + 1;
    v8 = v9;
    let v14 = "undefined";
    let v18 = 0;
    v18 = 10;
    const v22 = [1337,1337];
    let v23 = Math;
    const v24 = v23.atan(1337,1337,v22);
    let v25 = "undefined";
    let v29 = 0;
    v29 = 10;
}
const v36 = [1337];
for (let v40 = 0; v40 < 100; v40++) {
    const v41 = v1(10,Function,1337,v36,Function);
}
}
%NeverOptimizeFunction(main);
main();
