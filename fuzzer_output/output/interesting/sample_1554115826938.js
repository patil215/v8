function main() {
function v0(v1,v2,v3,v4) {
    let v6 = "undefined";
    for (let v10 = 0; v10 < 4; v10++) {
        const v12 = {get:v0,set:v0};
        delete Object.defineProperties;
        let v16 = 0;
        while (v16 < 8) {
            let v19 = 0;
            do {
                const v20 = v19 + 1;
                v19 = v20;
            } while (v19 < 2);
            const v21 = v16 + 1;
            v16 = v21;
        }
    }
    const v23 = v6[1000];
    return v23;
}
const v30 = [1337];
for (let v34 = 0; v34 < 100; v34++) {
    const v35 = v0(-9007199254740992,Function,1337,v30,Function);
}
}
%NeverOptimizeFunction(main);
main();
