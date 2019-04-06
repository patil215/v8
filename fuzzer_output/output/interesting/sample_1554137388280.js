function main() {
function v1(v2,v3,v4,v5) {
    let v7 = "undefined";
    const v8 = v7.indexOf(v3,16);
    return v8;
}
const v14 = [1337];
for (let v18 = 0; v18 < 100; v18++) {
    const v19 = v1(10,Reflect,1337,v14,Function);
}
}
%NeverOptimizeFunction(main);
main();
