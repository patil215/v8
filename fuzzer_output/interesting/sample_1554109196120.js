function main() {
const v2 = [1337,String];
function v3(v4,v5,v6,v7) {
    const v10 = [13.37,13.37,13.37,13.37];
    v2[2] = v10;
    return v2;
}
const v18 = [1337];
for (let v22 = 0; v22 < 100; v22++) {
    const v23 = v3(10,Function,1337,v18,Function);
}
}
%NeverOptimizeFunction(main);
main();
