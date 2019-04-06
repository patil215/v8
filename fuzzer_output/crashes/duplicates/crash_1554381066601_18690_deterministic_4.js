function main() {
for (let v3 = 0; v3 < 100; v3++) {
    let v5 = undefined;
    const v7 = [1337,1337];
    function v8(v9,v10,v11,v12) {
        const v13 = v7.indexOf();
        v5 = v13;
    }
    const v14 = v7.some(v8);
}
}
%NeverOptimizeFunction(main);
main();
