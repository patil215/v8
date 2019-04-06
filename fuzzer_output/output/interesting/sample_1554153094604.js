function main() {
for (let v4 = 0; v4 < 1337; v4++) {
    function v8(v9,v10,v11,v12,v13) {
        const v14 = v12.trunc(v10,v13,1337);
        return v14;
    }
    const v15 = v8(Math,1337,13.37,Math);
}
}
%NeverOptimizeFunction(main);
main();
