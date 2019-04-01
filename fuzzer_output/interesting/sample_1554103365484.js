function main() {
function v0(v1,v2,v3,v4) {
    let v7 = 0;
    while (v7 < 6) {
        const v8 = v7 + 1;
        v7 = v8;
    }
    const v10 = [1337];
    let v12 = 13.37;
    let v15 = 0;
    let v18 = 0;
    do {
        const v19 = v18 + 1;
        v18 = v19;
    } while (v18 < 9);
    for (const v20 in v12) {
    }
    for (let v24 = 0; v24 < 5; v24++) {
    }
    for (const v27 in Function) {
    }
    for (const v28 in Function) {
        for (let v32 = 0; v32 < 5; v32++) {
        }
        let v34 = "SQRT1_2";
        for (const v35 in v34) {
        }
        let v37 = "undefined";
        for (const v38 in v37) {
        }
    }
    for (const v40 in Function) {
    }
    let v41 = "undefined";
    for (const v42 in v41) {
    }
    for (let v46 = 0; v46 < 9; v46++) {
        for (const v47 of v10) {
            Function.valueOf = v0;
        }
    }
    let v49 = "undefined";
    let v52 = 0;
    for (const v53 in v49) {
    }
    let v55 = "undefined";
    let v59 = 0;
    v59 = 10;
    for (const v60 in v55) {
    }
    for (const v62 in Function) {
    }
}
const v68 = [1337];
for (let v72 = 0; v72 < 100; v72++) {
    const v73 = v0(10,String,1337,v68,Function);
}
}
%NeverOptimizeFunction(main);
main();
