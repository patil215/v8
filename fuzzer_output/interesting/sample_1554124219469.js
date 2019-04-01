function main() {
for (let v3 = 0; v3 < 100; v3++) {
    function v4(v5,v6,v7,v8) {
        const v11 = {__defineGetter__:1337};
        const v13 = [1337];
        for (let v17 = 0; v17 != 100; v17++) {
            for (let v21 = 0; v21 < 100; v21++) {
            }
            const v23 = Symbol.iterator;
            v11[v23] = v13;
        }
        let v24 = "undefined";
        for (const v25 of v24) {
            const v26 = v25[5];
        }
    }
    const v32 = [1337];
    const v33 = v4(10,Function,1337,v32,Function);
}
}
%NeverOptimizeFunction(main);
main();
