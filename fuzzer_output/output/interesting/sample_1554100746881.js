function main() {
function v1(v2,v3,v4,v5) {
    let v7 = "undefined";
    let v9 = "undefined";
    const v13 = [1337];
    const v14 = {exec:v13};
    let v17 = 0;
    const v18 = v17 + 1;
    v17 = v18;
    const v19 = 10 & v14;
}
const v25 = [1337];
for (let v29 = 0; v29 < 100; v29++) {
    const v30 = v1(10,Function,1337,v25,Function);
}
}
%NeverOptimizeFunction(main);
main();
