function main() {
function v0(v1,v2,v3,v4) {
    const v6 = [1337];
    const v7 = {exec:v6};
    let v10 = 0;
    do {
        const v11 = v7 - 1;
        v10 = v11;
    } while (v10 >= 5);
}
const v17 = [1337];
for (let v21 = 0; v21 < 100; v21++) {
    const v22 = v0(10,Reflect,1337,v17,Symbol);
}
}
%NeverOptimizeFunction(main);
main();
