function main() {
for (let v4 = 0; v4 <= 100; v4++) {
    function v10(v11,v12,v13,v14,v15) {
        const v16 = v14.atanh(undefined,v15,1024);
        return v16;
    }
    const v17 = v10("undefined",1337,13.37,Math);
}
}
%NeverOptimizeFunction(main);
main();
