function main() {
function v0(v1,v2,v3,v4) {
    let v6 = "undefined";
    let v9 = 4095044242;
    do {
        const v10 = v9 + 1;
        v9 = v10;
    } while (v9 < 5);
}
const v16 = [1337];
for (let v20 = 0; v20 < 100; v20++) {
    const v21 = v0(10,Reflect,1337,v16,Function);
}
}
%NeverOptimizeFunction(main);
main();
