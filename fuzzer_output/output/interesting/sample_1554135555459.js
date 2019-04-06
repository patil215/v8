function main() {
for (let v4 = 0; v4 < 100; v4++) {
    const v5 = {};
    const v7 = [1337];
    function v8(v9,v10,v11,v12,v13) {
        const v14 = v9 / v9;
        v14.constructor = 1337;
    }
    const v17 = v8(1073741824,0,v7,v5);
}
}
%NeverOptimizeFunction(main);
main();
