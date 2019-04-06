function main() {
const v5 = [1000];
for (let v9 = 0; v9 < 100; v9++) {
    let v11 = undefined;
    const v12 = {};
    const v15 = [1337];
    function v17(v18,v19,v20,v21,v22) {
        const v23 = v18 % v18;
        v23.constructor = 1337;
    }
    for (const v25 of v15) {
        const v26 = typeof v25;
        const v29 = v26 <= "string";
        const v30 = v17(1073741824,0,v15,v12);
        const v31 = v17(v25,Function,v29,13.37,0);
    }
}
}
%NeverOptimizeFunction(main);
main();
