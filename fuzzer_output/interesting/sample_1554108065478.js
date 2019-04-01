function main() {
function v1(v2,v3,v4,v5) {
    const v7 = {set:v1};
    const v9 = Object.defineProperty(String,-256,v7);
    let v11 = "undefined";
    function v18(v19,v20,v21,v22,v23) {
    }
    let v24 = 0;
    const v25 = v24 + 1;
    v24 = v25;
    const v27 = Symbol.replace;
    String[v27] = v18;
}
const v33 = [1337];
for (let v37 = 0; v37 < 100; v37++) {
    const v38 = v1(10,Reflect,1337,v33,Function);
}
}
%NeverOptimizeFunction(main);
main();
