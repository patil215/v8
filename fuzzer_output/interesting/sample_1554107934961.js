function main() {
function v1(v2,v3,v4,v5) {
    let v7 = "undefined";
    let v10 = 0;
    do {
        const v11 = v10 + 1;
        v10 = v11;
    } while (v10 != 5);
    return 1337;
}
const v20 = [1337];
for (let v24 = 0; v24 < 100; v24++) {
    const v25 = v1(10,Function,1337,v20,Function);
}
}
%NeverOptimizeFunction(main);
main();
