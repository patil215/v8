function main() {
function v0(v1,v2,v3,v4) {
    let v6 = "undefined";
    for (let v10 = 0; v10 < 4; v10++) {
        let v13 = 0;
        while (v13 < 8) {
            let v16 = 0;
            do {
                const v17 = {};
                const v18 = v16 + 1;
                v16 = v18;
            } while (v16 < 2);
            const v19 = v13 + 1;
            v13 = v19;
        }
    }
    const v21 = v6[1000];
    let v23 = 0;
    const v24 = v23 + 1;
    return v21;
}
const v30 = [1337];
for (let v34 = 0; v34 < 100; v34++) {
    const v35 = v0(-9007199254740992,Function,1337,v30,Function);
}
}
%NeverOptimizeFunction(main);
main();
