function main() {
for (let v6 = 0; v6 < 100; v6++) {
    const v9 = [512];
    function v11(v12,v13,v14,v15,v16) {
        const v17 = v12 / -256;
        v17.constructor = 1337;
    }
    for (const v19 of v9) {
        const v20 = typeof v19;
        const v21 = v20 <= 10;
        const v22 = v11(v19,Function,v21,Infinity,0);
    }
}
}
%NeverOptimizeFunction(main);
main();
