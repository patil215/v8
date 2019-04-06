function main() {
function v0(v1,v2,v3,v4) {
    let v8 = 0;
    const v9 = v8 + 1;
    v8 = v9;
    let v11 = "undefined";
    const v14 = [1337];
    const v15 = [v14];
    with (v15) {
        prototype = 13.37;
    }
    let v18 = 0;
    const v19 = v18 + 1;
    v18 = v19;
}
const v25 = [1337];
for (let v29 = 0; v29 < 100; v29++) {
    const v30 = v0(10,Function,1337,v25,Function);
}
}
%NeverOptimizeFunction(main);
main();
