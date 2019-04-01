function main() {
const v5 = [1337];
for (let v9 = 0; v9 < 100; v9++) {
    let v11 = undefined;
    let v17 = 2147483647;
    function v18(v19,v20,v21,v22) {
        let v24 = 0;
        const v25 = v24 / v17;
        v11 = v25;
    }
    Function.valueOf = v18;
    const v31 = [1337];
    for (let v38 = 0; v38 < 100; v38++) {
        const v39 = v18(10,Function,1337,v31,Function);
    }
}
}
%NeverOptimizeFunction(main);
main();
