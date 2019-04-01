function main() {
function v0(v1,v2,v3,v4) {
    let v7 = 0;
    const v8 = v7 + 1;
    v7 = v8;
    let v11 = 0;
    do {
        let v14 = 0;
        const v15 = v14 + 1;
        v14 = v15;
        const v16 = v11 + 1;
        v11 = v16;
        let v18 = 0;
        do {
            const v19 = v18 + 1;
            v18 = v19;
        } while (v18 < v3);
    } while (v11 < 4);
}
const v25 = [1337];
const v32 = v0(10,Function,1337,v25,Function);
}
%NeverOptimizeFunction(main);
main();
