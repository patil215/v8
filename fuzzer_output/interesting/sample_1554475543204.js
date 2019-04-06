function main() {
function v0(v1,v2,v3,v4) {
    const v6 = [13.37,13.37,13.37,13.37];
    for (const v7 of v6) {
        for (let v12 = 0; v12 < 3; v12++) {
            const v13 = v12 / 4208732107;
            const v14 = v13 | v7;
            const v15 = v14.__proto__;
        }
        for (let v19 = 0; v19 < 100; v19++) {
        }
    }
}
const v24 = [1337];
const v25 = v0(10,Function,10,v24,Function);
}
%NeverOptimizeFunction(main);
main();
