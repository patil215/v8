function main() {
for (let v4 = 0; v4 < 1337; v4++) {
    function v9(v10,v11,v12,v13,v14) {
        const v15 = v13.trunc(undefined,v14,1337);
        return v15;
    }
    const v16 = v9(Math,1337,13.37,Math);
}
}
%NeverOptimizeFunction(main);
main();
