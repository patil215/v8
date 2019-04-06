function main() {
const v6 = [1000];
for (let v10 = 0; v10 < 100; v10++) {
    let v12 = undefined;
    const v15 = [1337];
    function v17(v18,v19,v20,v21,v22) {
        const v23 = v18 % -256;
        v23.constructor = 1337;
    }
    for (const v25 of v15) {
        const v26 = typeof v25;
        const v27 = v26 <= 10;
        const v28 = v17(v25,Function,v27,13.37,0);
    }
}
}
%NeverOptimizeFunction(main);
main();
