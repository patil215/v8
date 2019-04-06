function main() {
function v2(v3,v4,v5,v6) {
    const v7 = Function.__proto__;
    let v16 = "undefined";
    const v19 = typeof 9007199254740991;
    let v20 = "undefined";
    for (const v23 in Function) {
        let v26 = 0;
        const v27 = {set:v19,atan:13.37,keys:v23,...v7,...Function,...13.37,...0,...13.37,...Function};
        const v28 = v26 + 1;
        v26 = v28;
    }
    for (const v29 in v16) {
        Function[10] = v29;
    }
    let v32 = 0;
    const v33 = v32 + 1;
    v32 = v33;
}
const v39 = [1337];
for (let v43 = 0; v43 < 100; v43++) {
    const v44 = v2(10,Function,1337,v39,Function);
}
}
%NeverOptimizeFunction(main);
main();
