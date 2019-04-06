function main() {
for (let v6 = 0; v6 < 100; v6++) {
    function v12(v13,v14,v15,v16,v17) {
        for (let v20 = 0; v20 < 3; v20++) {
            const v22 = v20 - v15;
            const v25 = [13.37,13.37,13.37];
            const v27 = [1];
            const v28 = Math.expm1(v27,v25);
            const v29 = [13.37,13.37,13.37,13.37];
            let v31 = 9007199254740991;
            const v32 = {lastParen:v20,copyWithin:Math,charAt:v31,repeat:v16,defineProperty:0,leftContext:Math,toString:v29,isView:v22,input:v20};
        }
    }
    const v33 = v12("undefined",1337,13.37,Math);
}
}
%NeverOptimizeFunction(main);
main();
