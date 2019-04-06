function main() {
function v1(v2,v3,v4,v5) {
    let v7 = "undefined";
    const v8 = v7.slice(v1,v7);
}
const v13 = [arguments];
for (let v17 = 0; v17 < 100; v17++) {
    const v18 = v1(10,Function,1337,v13,Function);
}
}
%NeverOptimizeFunction(main);
main();
