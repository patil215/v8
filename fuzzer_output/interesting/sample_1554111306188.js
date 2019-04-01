function main() {
const v1 = {__defineGetter__:1337};
function v4(v5,v6,v7,v8) {
    const v14 = [1337];
    let v18 = 0;
    const v19 = v18 + 1;
    v18 = v19;
    for (let v22 = 0; v22 != 100; v22++) {
        let v24 = undefined;
        const v27 = Symbol.iterator;
        v1[v27] = v14;
    }
}
const v33 = [1337];
const v34 = v4(10,Function,1337,v33,Function);
const v35 = v4("boolean","apply",1337);
}
%NeverOptimizeFunction(main);
main();
