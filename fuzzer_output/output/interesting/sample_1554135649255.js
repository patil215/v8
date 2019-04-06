function main() {
for (let v3 = 0; v3 < 100; v3++) {
    function v4(v5,v6,v7,v8) {
        const v12 = [13.37];
        for (const v13 of v12) {
            delete v12[0];
        }
        for (let v16 = 0; v16 < 100; v16++) {
            const v18 = v16 != undefined;
        }
    }
    const v24 = [1337];
    const v25 = v4(10,Function,1337,v24,Function);
}
}
%NeverOptimizeFunction(main);
main();
