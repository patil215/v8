function main() {
const v8 = [1337];
for (let v12 = 0; v12 < 100; v12++) {
    let v14 = undefined;
    const v17 = [13.37,13.37,13.37,13.37];
    const v19 = [1337];
    function v22(v23,v24,v25,v26,v27) {
        const v32 = Symbol.species;
        BigInt64Array[v32] = "undefined";
    }
    const v33 = v22(v22,v19,13.37,v17);
    let v35 = "undefined";
    let v39 = 0;
    const v40 = v39 + 1;
    v39 = v40;
}
}
%NeverOptimizeFunction(main);
main();
