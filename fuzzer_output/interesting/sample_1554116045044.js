function main() {
const v1 = [13.37,13.37,13.37,13.37,13.37];
function v2(v3,v4,v5,v6) {
    let v9 = 0;
    do {
        let v12 = 0;
        do {
            const v13 = 0 / v9;
            const v14 = v12 + 1;
            v12 = v14;
        } while (v12 < 10);
        const v15 = v9 + 1;
        v9 = v15;
    } while (v9 < 4);
}
const v21 = [1337];
const v22 = v2(10,Function,1337,v21,Function);
let v25 = 0;
const v26 = v25 + 1;
v25 = v26;
const v27 = v2(v22,v22);
}
%NeverOptimizeFunction(main);
main();
