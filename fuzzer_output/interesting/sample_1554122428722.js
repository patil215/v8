function main() {
function v1(v2,v3,v4,v5) {
    let v7 = "undefined";
    v7 = arguments;
    let v9 = "undefined";
    const v11 = v7[1000];
    let v14 = 0;
    const v15 = v14 + 1;
    v14 = v15;
}
const v21 = [1337];
const v25 = v1(10,Function,1337,v21,Function);
}
%NeverOptimizeFunction(main);
main();
