function main() {
const v1 = [1337,1337,1337];
function v2(v3,v4,v5,v6) {
    let v8 = "undefined";
    let v10 = 0;
    const v11 = v10 + 1;
    Function["undefined"] = 13.37;
    for (const v15 in Function) {
        const v16 = v15[v15];
    }
    v1.valueOf = v2;
    function v17(v18,v19,v20,v21) {
    }
    const v27 = [1337];
    for (let v31 = 0; v31 < 100; v31++) {
        const v32 = v17(10,Function,1337,v27,Function);
    }
}
const v37 = [10];
for (let v41 = 0; v41 < 100; v41++) {
    const v42 = v2(10,Function,1337,v37,Function);
}
}
%NeverOptimizeFunction(main);
main();
