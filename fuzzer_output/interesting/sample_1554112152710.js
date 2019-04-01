function main() {
function v0(v1,v2,v3,v4) {
    let v7 = 0;
    const v8 = v7 + 1;
    v7 = v8;
    let v11 = 0;
    let v14 = 0;
    const v15 = v14 + 1;
    v14 = v15;
    const v16 = v11 + 1;
    v11 = v16;
    let v18 = "undefined";
    const v21 = new Float64Array(47568);
    let v25 = 0;
    do {
        const v26 = v25 + 1;
        let v29 = 0;
        const v30 = v29 + 1;
        v29 = v30;
        const v31 = v26.constructor(v26,v21,47568);
        v25 = v26;
    } while (v25 < 5);
}
const v37 = [1337];
for (let v41 = 0; v41 < 100; v41++) {
    const v42 = v0(10,Function,1337,v37,Function);
}
}
%NeverOptimizeFunction(main);
main();
