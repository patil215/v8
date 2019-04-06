function main() {
function v1(v2,v3,v4,v5) {
    const v7 = [1337];
    const v8 = {exec:v7};
    let v11 = 0;
    const v12 = v11 + 1;
    v11 = v12;
    let v14 = "undefined";
    let v18 = 0;
    const v19 = v18 + 1;
    v18 = v19;
    let v22 = 0;
    do {
        const v23 = "undefined" - v8;
        const v24 = v22 + 1;
        v22 = v24;
    } while (v22 < 8);
}
const v30 = [1337];
for (let v34 = 0; v34 < 100; v34++) {
    const v35 = v1(10,Function,1337,v30,Function);
}
}
%NeverOptimizeFunction(main);
main();
