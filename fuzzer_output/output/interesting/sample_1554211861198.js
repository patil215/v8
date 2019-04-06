function main() {
const v1 = [13.37];
for (let v6 = 0; v6 <= 100; v6++) {
    function v11(v12,v13,v14,v15,v16) {
        const v17 = v15.log10(v1,v16,1024);
        return v17;
    }
    const v18 = v11("undefined",1337,13.37,Math);
}
}
%NeverOptimizeFunction(main);
main();
