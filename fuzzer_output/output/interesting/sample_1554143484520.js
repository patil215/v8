function main() {
for (let v4 = 0; v4 < 100; v4++) {
    function v11(v12,v13,v14,v15,v16) {
        const v22 = v15.imul(undefined,v16,1337);
    }
    const v23 = v11("undefined",1337,13.37,Math);
}
}
%NeverOptimizeFunction(main);
main();
