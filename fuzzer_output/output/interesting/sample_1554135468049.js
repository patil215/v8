function main() {
function v1(v2,v3,v4,v5) {
    let v7 = "cos";
    function v8(v9,v10,v11,v12) {
        const v14 = this.__lookupGetter__;
    }
    let v20 = 0;
    const v21 = new v8(10,v8,Function,v7,"cos");
    const v22 = v20 + 1;
    v20 = v22;
    const v25 = [1000];
    for (let v29 = 0; v29 < 100; v29++) {
        const v30 = v8(10,Function,1337,v25,Function);
    }
}
const v35 = [1337];
for (let v39 = 0; v39 < 100; v39++) {
    const v40 = v1(10,Function,1337,v35,v39);
}
}
%NeverOptimizeFunction(main);
main();
