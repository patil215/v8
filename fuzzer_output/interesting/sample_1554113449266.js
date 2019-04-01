function main() {
const v5 = [1337];
for (let v9 = 0; v9 < 100; v9++) {
    let v11 = undefined;
    const v13 = [13.37,13.37,13.37,13.37];
    let v15 = "undefined";
    let v22 = 0;
    const v23 = v22 + 1;
    v22 = v23;
    let v26 = 0;
    const v29 = [13.37,13.37,13.37,13.37,13.37];
    function v30(v31,v32,v33,v34) {
        for (let v38 = 0; v38 < 100; v38++) {
            v34.toString = v30;
        }
    }
    const v44 = [1337];
    const v45 = v30(10,Function,1337,v44,Function);
    const v46 = v30(1337,13.37,v29,v30);
    const v47 = v26 + 1;
    v26 = v47;
    let v50 = 0;
    const v51 = v50 + 1;
    v50 = v51;
}
}
%NeverOptimizeFunction(main);
main();
