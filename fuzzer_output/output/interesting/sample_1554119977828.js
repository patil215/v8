function main() {
function v1(v2,v3,v4,v5) {
    let v7 = "undefined";
    let v12 = 0;
    const v13 = v12 + 1;
    v12 = v13;
    Function["undefined"] = 13.37;
    for (const v17 in Function) {
        const v18 = v17[v17];
    }
    let v27 = 0;
    function v28(v29,v30,v31,v32) {
    }
    const v38 = [1337];
    for (let v42 = 0; v42 < 100; v42++) {
        const v43 = v28(10,Function,1337,v38,Function);
    }
}
const v49 = [1337];
const v50 = [v49];
const v53 = [1337];
for (let v57 = 0; v57 < 100; v57++) {
    const v58 = v1(10,Function,1337,v53,Function);
}
}
%NeverOptimizeFunction(main);
main();
