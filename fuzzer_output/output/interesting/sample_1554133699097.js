function main() {
const v1 = [13.37];
const v2 = v1[9007199254740992];
const v3 = {};
function v4(v5,v6,v7,v8) {
    function v10(v11,v12,v13,v14) {
    }
    const v20 = [1337];
    let v24 = 0;
    const v25 = v24 + 1;
    v24 = v25;
    for (let v28 = 0; v28 < 100; v28++) {
        const v29 = v10(10,Function,1337,v20,Function);
    }
    const v30 = [13.37,13.37,13.37,v7];
    for (let v34 = 0; v34 < 5; v34++) {
        v30[10] = v34;
    }
}
const v40 = [1337];
const v44 = v4(10,Function,1337,v40,Function);
const v45 = v4(v2,v4,v3);
}
%NeverOptimizeFunction(main);
main();
