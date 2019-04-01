function main() {
function v0(v1,v2,v3,v4) {
    let v7 = 0;
    while (v7 < 3) {
        const v9 = Symbol.toStringTag;
        Symbol[v9] = v9;
        const v10 = v7 + 1;
        v7 = v10;
    }
}
const v25 = [1337];
for (let v29 = 0; v29 < 100; v29++) {
    const v30 = v0(10,Function,1337,v25,Function);
}
let v33 = 0;
const v34 = v33 + 1;
v33 = v34;
}
%NeverOptimizeFunction(main);
main();
