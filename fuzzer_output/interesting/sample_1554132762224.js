function main() {
for (let v5 = 0; v5 < 100; v5++) {
    function v6(v7,v8,v9,v10) {
        const v11 = 1 % 1337;
        return v11;
    }
    const v17 = [1337];
    const v18 = v6(10,Function,1337,v17,Function);
}
}
%NeverOptimizeFunction(main);
main();
