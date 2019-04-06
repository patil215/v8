function main() {
for (let v3 = 0; v3 < 100; v3++) {
    function v4(v5,v6,v7,v8,v9) {
        const v12 = [3,1337,1337];
        const v13 = v12.indexOf();
        v13.multiline = 1337;
    }
    const v14 = v4();
}
}
%NeverOptimizeFunction(main);
main();
