function main() {
function v5(v6,v7,v8,v9,v10) {
    for (let v14 = 0; v14 < 3; v14++) {
        const v16 = 13.37 << v14;
        const v18 = [13.37,13.37,13.37,13.37];
        let v20 = 9007199254740991;
        const v21 = {lastParen:v14,copyWithin:Math,charAt:v20,repeat:v9,defineProperty:0,leftContext:Math,toString:v18,isView:v16,input:v14};
    }
}
for (let v25 = 0; v25 < 100; v25++) {
    const v26 = v5("undefined",1337,13.37,Math);
}
}
%NeverOptimizeFunction(main);
main();
