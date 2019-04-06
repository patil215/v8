function main() {
function v0(v1,v2,v3,v4) {
    const v5 = v1 === v3;
    let v6 = v2;
    if (v5) {
    } else {
        const v8 = [1337];
        const v9 = {hypot:v8};
        function v10(v11,v12,v13,v14) {
        }
        const v22 = [v9];
        const v23 = v10(10,Function,1337,v22,Function);
        for (let v27 = 0; v27 < 100; v27++) {
            const v28 = v0(v5,v4,v5,v1,v6);
        }
    }
}
const v34 = [1337];
const v35 = v0(10,Function,1337,v34,Function);
}
%NeverOptimizeFunction(main);
main();
