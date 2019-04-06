function main() {
const v2 = Symbol.isConcatSpreadable;
Symbol[v2] = "set";
let v5 = 0;
const v6 = v5 + 1;
v5 = v6;
const v8 = typeof "CbcMlowQhw";
const v11 = {map:13.37,toPrimitive:v8};
for (let v15 = 0; v15 < 100; v15++) {
    function v16(v17,v18,v19,v20) {
        const v22 = Symbol.toStringTag;
        const v23 = v22 != v22;
    }
    const v25 = [1337];
    const v26 = v25.map(v16,"boolean",v11);
}
}
%NeverOptimizeFunction(main);
main();
