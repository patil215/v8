function main() {
const v8 = [1337];
for (let v12 = 0; v12 < 100; v12++) {
    let v14 = undefined;
    const v16 = [1337];
    const v17 = {exec:v16};
    const v20 = [13.37,13.37];
    const v22 = {ceil:13.37,is:v20,raw:1337};
    const v26 = [1337];
    function v29(v30,v31,v32,v33,v34) {
        const v35 = v26.push(v34,v22,v29);
    }
    v26[1337] = "undefined";
    for (let v39 = 0; v39 < 100; v39++) {
        const v40 = v29(1337,Math,9007199254740991,9007199254740991);
    }
    let v42 = 0;
    const v43 = v17 + 1;
    v42 = v43;
}
}
%NeverOptimizeFunction(main);
main();
